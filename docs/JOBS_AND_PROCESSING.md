# Jobs & Processing Decision

Status: Draft v0.1  
Decision: Use Sidekiq (with Redis) for background processing in Phase 1.

## 1. Requirements

| Requirement              | Importance | Notes                                                    |
| ------------------------ | ---------- | -------------------------------------------------------- |
| Reliable async execution | Critical   | Transcription + report generation must survive restarts. |
| Concurrency control      | High       | CPU-bound / IO-bound mix; need tuning.                   |
| Retry with backoff       | High       | External API flakiness.                                  |
| Visibility (dashboard)   | High       | Ops needs to inspect failures.                           |
| Scheduling future jobs   | Medium     | Report refresh / cleanup.                                |
| Multi-tenant tagging     | High       | Isolation + metrics.                                     |
| Rails ecosystem maturity | High       | Minimize friction.                                       |

## 2. Options

### Sidekiq

Pros:

- Mature, widely adopted, excellent performance (multithreaded).
- Rich middleware ecosystem (instrumentation, unique jobs, rate limiting).
- Familiar operational model for most Rails engineers.
- Low overhead on Railway since Redis already needed for caching.

Cons:

- Requires Redis (additional network hop).
- Licenses for advanced features (Pro/Enterprise) if needed later.

### GoodJob

Pros:

- Postgres-backed (no Redis dependency).
- Uses advisory locks; fewer moving parts early.
- Built-in cron / batches; open-source only.

Cons:

- Throughput lower vs Sidekiq for high concurrency.
- DB bloat risk with many job rows (requires pruning).
- Adds load to primary DB (mixes OLTP + queue).

## 3. Decision Rationale

Chose Sidekiq because:

- We already plan to use Redis for caching / rate limiting.
- Anticipated audio + AI workloads benefit from high concurrency & thread efficiency.
- Better ecosystem for uniqueness, throttling, distributed execution.
- Migration path (if ever needed) still feasible; job interface simple (`perform_async`).

## 4. Implementation Outline

1. Add `sidekiq` gem + initializer.
2. Configure queues: `critical`, `default`, `low`.
3. Mount Sidekiq Web UI at `/admin/sidekiq` (protected).
4. Worker pattern:

```ruby
class TranscriptionJob
  include Sidekiq::Job
  sidekiq_options queue: :default, retry: 5
  def perform(audio_recording_id)
    TenantContext.with(audio_recording_id) do
      # fetch, process, store results
    end
  end
end
```

5. Idempotency: store fingerprint (audio_recording_id + version) to skip duplicates.
6. Add middleware to inject `tenant_id` into logs + metrics.

## 5. Future Enhancements

| Need                       | Approach                                       |
| -------------------------- | ---------------------------------------------- |
| Cron jobs                  | `sidekiq-cron` gem or Railway scheduled tasks. |
| Unique jobs                | `sidekiq-unique-jobs` gem.                     |
| Rate limiting external API | Token bucket middleware per provider.          |
| Distributed tracing        | OpenTelemetry instrumentation.                 |
| Priority routing           | Separate concurrency settings per queue.       |

## 6. Migration Considerations (If Switching Later)

- Keep workers thin; domain services perform logic.
- Abstract enqueueing behind `JobBus.enqueue(job_class, *args)` → adapter (Sidekiq now, alternate later).

## 7. Metrics (Planned)

- Queue latency (enqueued time → start).
- Execution duration.
- Retries & dead letter count.
- Per-tenant job volume.

## 8. Open Questions

- Need for global concurrency caps per provider?
- Memory profiling of audio processing tasks?

## 9. Summary

Sidekiq aligns with performance + ecosystem needs; Redis cost is justified. Adapter pattern keeps door open for future alternatives.
