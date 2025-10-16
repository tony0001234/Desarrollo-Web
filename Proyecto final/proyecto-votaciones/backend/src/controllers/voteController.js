import { openDb } from "../db.js";

// POST /votes
export async function castVote(req, res) {
  const db = await openDb();
  const { campaign_id, candidate_id } = req.body;
  const user_id = req.user.id;

  if (!campaign_id || !candidate_id)
    return res.status(400).json({ message: "Datos incompletos." });

  try {
    await db.run("BEGIN TRANSACTION");

    // Verificar si ya votó
    const existing = await db.get(
      "SELECT id FROM votes WHERE user_id = ? AND campaign_id = ?",
      [user_id, campaign_id]
    );
    if (existing) {
      await db.run("ROLLBACK");
      return res.status(409).json({ message: "Ya has votado en esta campaña." });
    }

    await db.run(
      "INSERT INTO votes (user_id, campaign_id, candidate_id) VALUES (?, ?, ?)",
      [user_id, campaign_id, candidate_id]
    );

    await db.run("COMMIT");
    res.status(201).json({ message: "Voto registrado correctamente." });
  } catch (err) {
    await db.run("ROLLBACK");
    console.error(err);
    res.status(500).json({ message: "Error al registrar voto." });
  }
}

// GET /votes/results/:campaign_id
export async function getResults(req, res) {
  const db = await openDb();
  const { campaign_id } = req.params;

  const results = await db.all(
    `SELECT c.name AS candidate, COUNT(v.id) AS votes
     FROM candidates c
     LEFT JOIN votes v ON v.candidate_id = c.id
     WHERE c.campaign_id = ?
     GROUP BY c.id
     ORDER BY votes DESC`,
    [campaign_id]
  );

  res.json(results);
}
