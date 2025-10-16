import { openDb } from "../db.js";

// GET /campaigns
export async function getCampaigns(req, res){
    const db = await openDb();
    const campaigns = await db.all("SELECT * FROM campaigns");
    res.json(campaigns);
}

// POST /campaigns (solo admin)
export async function createCampaign(req, res){
    const db = await openDb();
    const { title, description, start_date, end_date } = req.body;

    if (!title){
        return res.status(400).json({ message: "El titulo es obligatorio."});
    }

    await db.run(
        `INSERT INTO campaigns (title, description, status, start_date, end_date)
        VALUES (?, ?, 'active', ?, ?)`,
        [title, description || "", start_date, end_date]
    );

    res.status(201).json({ message: "Campañe creada correctamente."});
}

// PUT /campaigns/:id (cambiar estado)
export async function updateCampaignStatus(req, res){
    const db = await openDb();
    const { id } = req.params;
    const { status } = req.body;

    const validStatus = ["draft", "active", "closed"];
    if(!validStatus.includes(status)){
        return res.status(400).json({ message: "Estado invalido."})
    }

    const result = await db.run("UPDATE campaigns SET status = ? WHERE id = ?", [status, id]);

    if(result.changes === 0) return res.status(404).json({ message: "Campaña no encontrada."});

    res.json({ message: "Estado de campaña actualizado."});
}