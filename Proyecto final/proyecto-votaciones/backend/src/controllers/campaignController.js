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

//GET obtener todas las campañas
export async function getAllCampaigns(req, res) {
    try{
        const db = await openDb();

        const campaign = await db.all(
            `SELECT 
                c.id, 
                c.title, 
                c.description,
                c.status,
                c.start_date,
                c.end_date,
                COUNT(v.id) AS total_votes
            FROM campaigns c
            LEFT JOIN candidates ca ON ca.campaign_id = c.id
            LEFT JOIN votes v ON v.candidate_id = ca.id
            GROUP BY c.id
            ORDER BY c.start_date DESC;
            `);

            res.status(200).json({ campaigns });
        } catch (error) {
            console.error("Error al obtener campañas:", error);
            res.status(500).json({ message: "Error interno del servidor." });
        }
}

//GET obtener campaña especifica
export async function getCampaignById(req, res) {
    const { id } = req.params;

    try {
        const db = await openDb();

        // Obtener info general de la campaña
        const campaign = await db.get(
        "SELECT id, title, description, status, start_date, end_date FROM campaigns WHERE id = ?",
            [id]
            );

            if (!campaign) {
            return res.status(404).json({ message: "Campaña no encontrada." });
            }

            // Obtener lista de candidatos y votos
            const candidates = await db.all(
            `
            SELECT 
                ca.id,
                ca.campaign_id,
                ca.name,
                COUNT(v.id) AS votes
            FROM candidates ca
            LEFT JOIN votes v ON v.candidate_id = ca.id
            WHERE ca.campaign_id = ?
            GROUP BY ca.id
            ORDER BY votes DESC
            `,
            [id]
            );

            // Calcular total de votos de la campaña
            const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);

            res.status(200).json({
            id: campaign.id,
            title: campaign.title,
            description: campaign.description,
            status: campaign.status,
            start_date: campaign.start_date,
            end_date: campaign.end_date,
            totalVotes,
            candidates,
            });
        } catch (error) {
            console.error("Error al obtener campaña:", error);
            res.status(500).json({ message: "Error interno del servidor." });
        }
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