import bcrypt from 'bcrypt';
import { openDb } from '../db.js';

export async function registerUser(req, res) {
  try {
    const { name, email, password, role } = req.body;
    const db = await openDb();

    // Validar email único
    const existing = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    if (existing) {
      return res.status(409).json({ message: 'El email ya está registrado' });
    }

    // Validar contraseña mínima
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres' });
    }

    // Hash de contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role || 'voter']
    );

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
