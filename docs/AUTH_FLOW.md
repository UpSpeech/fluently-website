# Authentication & Authorization Flow

Status: Draft v0.1  
Last Updated: 2025-09-11

## 1. Goals

- Secure, stateless API access (JWT) with refresh capability.
- Multi-tenant aware: every auth artifact encodes tenant context.
- Minimal round trips; easy to extend (SSO, magic links).

## 2. Actors

- End-user (browser SPA).
- Rails API (auth controller + token service).
- Token Store (DB table for refresh tokens if using revocation) or purely stateless if using rotation & jti blacklist in Redis.

## 3. Token Model

| Token                               | Storage                                | Lifetime      | Purpose                   |
| ----------------------------------- | -------------------------------------- | ------------- | ------------------------- |
| Access JWT                          | In-memory (React state)                | 15m           | Authorize API requests.   |
| Refresh Token                       | HttpOnly Secure SameSite=Strict cookie | 30d (rotated) | Obtain new access tokens. |
| (Optional) Email Verification Token | DB or signed token                     | 24h           | Activate user.            |
| (Optional) Password Reset Token     | DB or signed token                     | 1h            | Credential recovery.      |

Claims (Access): `sub` (user id), `tid` (tenant id), `iat`, `exp`, `jti`, `roles` (array), `ver` (token schema version).

## 4. Login Flow

1. POST `/auth/login` with email + password.
2. Validate user; ensure belongs to active tenant.
3. Issue Access JWT + set Refresh cookie.
4. Return user profile + tenant meta (name, plan flags).

## 5. Refresh Flow

1. Browser detects (401) or proactive refresh (timer).
2. POST `/auth/refresh` (cookie automatically sent).
3. Server validates refresh (rotation):
   - If using DB: mark previous token as used & issue new; revoke chain on replay.
   - If stateless: store `jti` of used refresh tokens in Redis with TTL.
4. Returns new Access JWT (never expose refresh in body).

## 6. Logout

- POST `/auth/logout`: invalidate refresh (DB delete / blacklist).
- Clear cookie.

## 7. Password Reset

1. Request: POST `/auth/password/reset/request` with email.
2. Send signed token link `https://app/reset?token=...`.
3. Validate, allow new password set; rotate all tokens.

## 8. Registration

- POST `/auth/register`: creates Tenant + User (owner role).
- Optionally require email verification before enabling login.
- Seed default settings rows.

## 9. Roles & Authorization

Initial roles: `owner`, `admin`, `member`.

- Policy layer: Pundit or Cancancan with tenant scoping.
- Access JWT includes `roles`; server re-checks DB on sensitive operations (defense in depth).

## 10. Rate Limiting

- `/auth/login`: 5 attempts / 10 min / IP + email combo.
- `/auth/refresh`: moderate limit (e.g., 60 / 10 min / user).

## 11. CSRF Considerations

- Access token never stored in cookie; refresh cookie is HttpOnly.
- Refresh endpoint can additionally require `X-CSRF-Token` derived from refresh token hash if desired (Phase 2).

## 12. Implementation Gems

- `devise` (email/password, recoverable, confirmable).
- `devise-jwt` or custom Warden strategy for access tokens.
- `argon2` or `bcrypt` for password hashing.
- `pundit` for policies.

## 13. Example Access JWT Payload

```json
{
  "sub": "user_1234",
  "tid": "tenant_abcd",
  "roles": ["owner"],
  "iat": 1710000000,
  "exp": 1710000900,
  "jti": "01HV....ULID",
  "ver": 1
}
```

## 14. Frontend Handling

- Store access token only in memory; on full reload call `/auth/session` which validates refresh cookie and rehydrates session (issues new access token).
- Silent refresh timer at 60% of TTL.
- Global Axios interceptor for 401 → attempt refresh once → retry original request.

## 15. Auditing (Phase 2)

Log events: login success/failure, password reset request, role change, token revocation.

## 16. Future Extensions

- SSO (SAML / OIDC) maps external identity to tenant role.
- Magic links (email-based sign-in).
- WebAuthn for phishing-resistant MFA.

## 17. Open Questions

- Do we need MFA in first 6 months?
- Which error format standard (JSON:API vs custom)?

## 18. Summary

Stateless access + rotating refresh cookie gives scalability and revocation control; layered policies ensure safe tenant separation.
