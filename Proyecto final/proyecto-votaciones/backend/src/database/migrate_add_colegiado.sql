PRAGMA foreign_keys = OFF;

BEGIN TRANSACTION;

-- 1) Crear tabla nueva con la columna colegiado y la restricción UNIQUE
CREATE TABLE IF NOT EXISTS users_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  colegiado INTEGER NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  dpi INTEGER NOT NULL UNIQUE,
  birth_date NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'voter',
  active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT (datetime('now'))
);

-- 2) Copiar datos antiguos, asignando un valor temporal a 'colegiado'
--    Aquí ponemos un valor provisional 'COLEG-<id>' para evitar NOT NULL.
INSERT INTO users_new (id, colegiado, name, email, dpi, birth_date, password, role, active, created_at)
SELECT id, '0' || id, name, email, '000000000000' || id, 'marzo' , password, role, 1, created_at FROM users;

-- 3) Borrar tabla antigua y renombrar
DROP TABLE users;
ALTER TABLE users_new RENAME TO users;

-- 4) (opcional) crear índices
CREATE INDEX IF NOT EXISTS idx_users_colegiado ON users (colegiado);

COMMIT;
PRAGMA foreign_keys = ON;
