CREATE TABLE IF NOT EXISTS revoked_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT NOT NULL,
    expires_at DATETIME NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_revoked_tokens_token ON revoked_tokens (token);