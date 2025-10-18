import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

//abrir conexión a la base de datos
export async function openDb() {
    const dbPath = path.resolve(process.cwd(), process.env.DB_PATH || "src/database/database.sqlite");

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

    // activar foreign keys
    await db.exec('PRAGMA foreign_keys = ON;');
    await db.exec('PRAGMA journal_mode = WAL;');//mejora concurrencia
    await db.exec('PRAGMA synchronous = NORMAL;');//mejora rendimiento y seguridad

  return db;
}

export async function initSchema() {
  const db = await openDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      colegiado INTEGER NOT NULL UNIQUE,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      dpi INTEGER NOT NULL UNIQUE,
      birth_date TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'voter',
      active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS campaigns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      start_date DATETIME,
      end_date DATETIME,
      created_at DATETIME DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS candidates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      campaign_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      bio TEXT,
      photo_url TEXT,
      created_at DATETIME DEFAULT (datetime('now')),
      FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS votes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      campaign_id INTEGER NOT NULL,
      candidate_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT (datetime('now')),
      
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE,
      FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE,
      UNIQUE(user_id, campaign_id)
    );
    CREATE TABLE IF NOT EXISTS revoked_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT NOT NULL,
    expires_at DATETIME NOT NULL
    );
  `);

  // índices
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_candidates_campaign ON candidates (campaign_id);
    CREATE INDEX IF NOT EXISTS idx_users_colegiado ON users (colegiado);
    CREATE INDEX IF NOT EXISTS idx_votes_campaign ON votes (campaign_id);
    CREATE INDEX IF NOT EXISTS idx_votes_user ON votes (user_id);
    CREATE INDEX IF NOT EXISTS idx_revoked_tokens_token ON revoked_tokens (token);
  `);

  // seed básico (opcional, solo si no hay usuarios)
  const count = await db.get('SELECT COUNT(*) as c FROM users');
  if (count.c === 0) {
    // usa bcrypt para hashear, aquí se asume que ya lo hiciste antes
    await db.run(`INSERT INTO users (colegiado, name, email, dpi, birth_date, password, role, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ['949022958' ,'Tony Ramírez', 'tony@example.com', '3030677640108', '29-03-2001', 'MiClave123!', 'admin', 1]);
  }

  return db;
}
