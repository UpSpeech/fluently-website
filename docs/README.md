# UpSpeech Documentation

Index of architecture & design references.

## Core Design Docs

- [System Design](SYSTEM_DESIGN.md)
- [Multi-Tenancy](MULTI_TENANCY.md)
- [Authentication Flow](AUTH_FLOW.md)
- [Jobs & Processing (Queue Decision)](JOBS_AND_PROCESSING.md)

## Upcoming / Planned

- Deployment (Railway) – forthcoming
- API Reference – auto-generated later
- Prompt Engineering Guidelines – forthcoming

## Conventions

- All diagrams use Mermaid; regenerate locally via VS Code extension or CI check later.
- ADRs (Architectural Decision Records) live under `docs/adr/`.

## Editing Guidelines

1. Keep sections concise; move deep dives to separate files.
2. When changing a system behavior, add or update an ADR.
3. Use TODO comments with an owner or target date when possible.

---

PRs that alter design docs should include a summary of impact in the description.
