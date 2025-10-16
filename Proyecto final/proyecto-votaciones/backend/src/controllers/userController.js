import bcrypt from 'bcrypt';
import { openDb } from '../db.js';
import { generateToken } from '../utils/jwt.js';

//POST /users/register
export async function registerUser(req, res) {
  try {
    const db = await openDb();
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

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
  } catch (err){
    console.error('Error al registrar usuario: ', error);
    return res.status(500).json({ message: 'Error interno del servidor'});
  }
}

//POST /users/login
export async function loginUser(req, res) {
  const db = await openDb();
  const { email, password } = req.body;

  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = generateToken({ id: user.id, email: user.email, role: user.role });
  return res.json({ message: "successful login " ,token });
}

//GET /users (ruta protegida)
export async function getUsers(req, res) {
  const db = await openDb();
  const users = await db.all('SELECT id, name, email, role FROM users');
  return res.json(users);
}
