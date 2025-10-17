import { openDb } from "../db.js";

//actualizar campaña: editar titulo, descripcion, fecha de inicio, fecha de final
export async function updateCampaign(req, res) {
    const db = await openDb();
    const { id } = req.params;
    const { title, description, start_date, end_date } = req.body;

    const fields = [];
    const values = [];
    if (title) { fields.push("title = ?"); values.push(title); }
    if (description) { fields.push("description = ?"); values.push(description); }
    if (start_date) { fields.push("start_date = ?"); values.push(start_date); }
    if (end_date) { fields.push("end_date = ?"); values.push(end_date); }

    if (fields.length === 0) return res.status(400).json({ message: "Nada para actualizar." });

    values.push(id);
    const sql = `UPDATE campaigns SET ${fields.join(", ")} WHERE id = ?`;
    const result = await db.run(sql, values);

    if (result.changes === 0) return res.status(404).json({ message: "Campaña no encontrada." });

    const campaign = await db.get("SELECT * FROM campaigns WHERE id = ?", [id]);
    res.json({ message: "Campaña actualizada.", campaign });
}

// toggle activa (enable/disable) - set status 'draft' or 'active' (or use active flag)
export async function toggleCampaignActive(req, res) {
    const db = await openDb();
    const { id } = req.params;
    const { active } = req.body; // booleano

    if (typeof active === "undefined") return res.status(400).json({ message: "Se requiere 'active' booleano." });

    // map boolean to status: active -> 'active', false -> 'draft' (or 'disabled')
    const status = active ? "active" : "draft";
    const result = await db.run("UPDATE campaigns SET status = ? WHERE id = ?", [status, id]);
    if (result.changes === 0) return res.status(404).json({ message: "Campaña no encontrada." });

    res.json({ message: `Campaña ${active ? "habilitada" : "deshabilitada"}.` });
}

// cerrado manual
export async function closeCampaignManually(req, res) {
    const db = await openDb();
    const { id } = req.params;

    const result = await db.run("UPDATE campaigns SET status = 'closed' WHERE id = ?", [id]);
    if (result.changes === 0) return res.status(404).json({ message: "Campaña no encontrada." });

    res.json({ message: "Campaña cerrada manualmente." });
}

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