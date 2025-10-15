import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initSchema } from './db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ping", async (req, res) => {
    try {
        const db = await import("./db.js").then(m => m.openDb());
        const users = await db.get("SELECT COUNT(*) as count FROM users");
        //const result = await db.get("PRAGMA foreign_keys;");
        res.json({message: "pong", users_in_db: users.count});
    } catch (err) {
        res.status(500).json({ error: "Database conection error" });
    }
});

//inicializar base de datos
initSchema().then(() => {
    console.log('Database schema initialized');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('Failed to initialize database schema:', err);
    process.exit(1);
});