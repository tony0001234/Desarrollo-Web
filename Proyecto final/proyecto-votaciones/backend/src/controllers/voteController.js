import { openDb } from '../db.js';

export async function castVote(req, res) {
  const { user_id, campaign_id, candidate_id } = req.body;

  if (!user_id || !campaign_id || !candidate_id) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  const db = await openDb();
  try {
    // Verificar que el candidato pertenece a la campaña
    const candidate = await db.get(
      'SELECT * FROM candidates WHERE id = ? AND campaign_id = ?',
      [candidate_id, campaign_id]
    );
    if (!candidate) {
      return res.status(400).json({ message: 'Candidato inválido para esta campaña' });
    }

    // Transacción de voto
    await db.run('BEGIN TRANSACTION');
    await db.run(
      `INSERT INTO votes (user_id, campaign_id, candidate_id) VALUES (?, ?, ?)`,
      [user_id, campaign_id, candidate_id]
    );
    await db.run('COMMIT');

    return res.status(201).json({ message: 'Voto registrado exitosamente' });
  } catch (err) {
    await db.run('ROLLBACK');
    if (err.message.includes('UNIQUE')) {
      return res.status(409).json({ message: 'Este usuario ya votó en esta campaña' });
    }
    console.error(err);
    return res.status(500).json({ message: 'Error al registrar el voto' });
  }
}
