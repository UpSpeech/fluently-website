# Multi-Tenancy Strategy

Status: Draft v0.1  
Last Updated: 2025-09-11

## 1. Goals

- Simple to implement now (no over-engineering).
- Strong logical isolation with minimal developer friction.
- Migration path to stronger physical isolation for select tenants.
- Minimize risk of cross-tenant data exposure.

## 2. Phased Approach

| Phase         | Model                                                | Use Case          | Notes                                      |
| ------------- | ---------------------------------------------------- | ----------------- | ------------------------------------------ |
| 1 (MVP)       | Shared schema; `tenant_id` FK on rows                | Fast delivery     | Add indexes early.                         |
| 2 (Enhance)   | Postgres Row Level Security                          | Defense in depth  | Activate once queries stable.              |
| 3 (Selective) | Separate schemas per enterprise tenant               | Premium isolation | Migrate subset of tenants.                 |
| 4 (Advanced)  | Separate databases (cluster or serverless instances) | Large enterprise  | Only if data volume or compliance demands. |

## 3. Tenant Identification

- Each request includes Access JWT with `tid` claim (tenant UUID).
- `current_tenant` resolved by joining user + claim.
- Websocket / SSE channels include tenant context in auth handshake.

## 4. Data Modeling Conventions

- Every tenant-owned table: `tenant_id UUID NOT NULL` + composite index if high cardinality queries: `(tenant_id, created_at)` or `(tenant_id, status)`.
- Reference pattern:

```ruby
# Example model
class AudioRecording < ApplicationRecord
  include TenantScoped
  belongs_to :tenant
  belongs_to :user
end
```

## 5. Rails Enforcement Layer

`TenantScoped` concern:

- Validates presence of `tenant_id`.
- Default scope or (preferred) a `for_current_tenant` scope invoked centrally.
- Add a controller concern: `before_action :enforce_tenant_scope` that sets `ActsAsTenant.current_tenant` or custom context object.

Prefer explicit scoping helper to avoid global default scope pitfalls (pagination/count issues).

## 6. Query Safety

- RuboCop custom cop to flag models missing `tenant_id`.
- Test helper: `expect { unsafe_query }.to raise_error(TenantScopeMissing)` in critical paths.
- Periodic sampling: log statements without tenant filter (log scanning job).

## 7. RLS (Phase 2)

Example policy after validation period:

```sql
ALTER TABLE audio_recordings ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation ON audio_recordings
  USING (tenant_id::text = current_setting('app.current_tenant_id'));
```

Set parameter at session start:

```sql
SELECT set_config('app.current_tenant_id', 'tenant-uuid-here', false);
```

Rails middleware sets it per request via `ActiveRecord::Base.connection.execute`.

## 8. Schema / DB Migration (Phase 3+)

Migration candidate criteria:

- Data volume > X GB OR latency sensitive OR contractual isolation.
- Steps:
  1. Create new schema `tenant_<slug>`.
  2. Copy structure (pg_dump --schema-only).
  3. Use logical replication or dual-write instrumentation for cutover.
  4. Freeze writes for tenant, sync delta, update routing table, unfreeze.

Routing abstraction: `TenantRouter.resolve(tenant_id)` → returns connection spec.

## 9. Background Jobs

Include `tenant_id` explicitly in job args. Load tenant context at job start. Fail fast if tenant missing or soft-deleted.

## 10. Soft Deletion & Retention

- Add `deleted_at` to Tenant for graceful off-boarding.
- Background job queues reject jobs for deleted tenants.
- Data purge policy (Phase 2) configurable in settings table.

## 11. Observability

- Add `tenant_id` to structured logs + metrics tags.
- PII scrubbing pipeline to avoid leaking user content into logs.

## 12. Testing Strategy

- Factory creates a tenant + user automatically.
- Shared examples ensuring each model enforces tenant scope.
- Cross-tenant access attempt spec (should raise / 404).

## 13. Open Questions

- Do we need per-tenant rate limits? (Could add Redis buckets keyed by tenant.)
- Billing alignment with isolation level?

## 14. Summary

Start lean with row-level logical isolation; layer in RLS + routing only when justified. Guard rails (lint + tests + logging) prevent accidental leaks.
