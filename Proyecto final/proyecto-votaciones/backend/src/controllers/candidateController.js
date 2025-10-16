import { openDb } from "../db.js";

//GET /candidates/:campaign_id
export async function getCandidatesByCampaign(req, res){
    const db = await openDb();
    const { campaign_id } = req.params;
    const candidates = await db.all("SELECT * FROM candidates WHERE campaign_id = ?", [campaign_id]);
    res.json(candidates);
}

//POST /candidates (solo admin)
export async function createCandidate(req, res){
    const db = await openDb();
    const { campaign_id, name, bio } = req.body;

    if(!campaign_id || !name){
        return res.status(400).json({ message: "Faltan campos obligatorios."});
    }

    await db.run(
        `INSERT INTO candidates (campaign_id, name, bio) VALUES (?, ?, ?)`,
        [campaign_id, name, bio || ""]
    );

    res.status(201).json({ message: "Candidato agregado correctamente."});
}