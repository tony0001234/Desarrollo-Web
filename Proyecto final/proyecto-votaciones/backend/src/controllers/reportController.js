import { openDb } from "../db.js";

export async function getGeneralReport(req, res) {
  const db = await openDb();

  const totalUsers = await db.get("SELECT COUNT(*) AS total_users FROM users");
  const totalVotes = await db.get("SELECT COUNT(*) AS total_votes FROM votes");
  const perCampaign = await db.all(
    `SELECT c.id AS campaign_id, c.title, COUNT(v.id) AS votes
     FROM campaigns c
     LEFT JOIN votes v ON v.campaign_id = c.id
     GROUP BY c.id
     ORDER BY votes DESC`
  );

  res.json({
    total_users: totalUsers.total_users,
    total_votes: totalVotes.total_votes,
    campaigns: perCampaign
  });
}

export async function getCampaignReport(req, res) {
  const db = await openDb();
  const { id } = req.params;

  const campaign = await db.get("SELECT * FROM campaigns WHERE id = ?", [id]);
  if (!campaign) return res.status(404).json({ message: "Campaña no encontrada." });

  const results = await db.all(
    `SELECT c.id AS candidate_id, c.name AS candidate_name, COUNT(v.id) AS votes
     FROM candidates c
     LEFT JOIN votes v ON v.candidate_id = c.id
     WHERE c.campaign_id = ?
     GROUP BY c.id
     ORDER BY votes DESC`, [id]
  );

  const totalVotes = results.reduce((s, r) => s + r.votes, 0);

  res.json({ campaign, total_votes: totalVotes, results });
}