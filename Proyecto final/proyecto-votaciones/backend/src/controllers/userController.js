import bcrypt from 'bcrypt';
import { openDb } from '../db.js';
import { generateToken } from '../utils/jwt.js';
import jwt from "jsonwebtoken";

//PUT admin modifica, name, email, dpi, birth_date, role, active 
export async function updateUser(req, res){
  const db = await openDb();
  const { id } = req.params;
  const { name, email, dpi, birth_date, role, active } = req.body;

  //validaciones basicas
  if(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json( { message: "Email invalido." });
  }
  if(dpi && !/^\d{13,}$/.test(email)) return res.status(400).json({ message: "DPI invalido."});

  //conflictos de unicidad
  if (email){
    const ex = await db.get("SELECT id FROM users WHERE email = ? AND id != ?", [email, id]);
    if (ex) return res.status(409).json({ message: "Email en uso por otor usuario."});
  }
  if (dpi){
    const ex2 = await db.get("SELECT id FROM users WHERE dpi = ? AND id != ?", [dpi, id]);
    if (ex2) return res.status(409).json({ message: "DPI en uso por otro usuario." });
  }

  //build dinamico de update
  const fields = [];
  const values = [];
  if (name) { fields.push("name = ?"); values.push(name); }
  if(email) { fields.push("email = ?"); values.push(email); }
  if (dpi) { fields.push("dpi = ?"); values.push(dpi); }
  if (birth_date) { fields.push("birth_date = ?"); values.push(birth_date); }
  if (role) { fields.push("role = ?"); values.push(role); }
  if (typeof active !== "undefined") { fields.push("active = ?"); values.push(active ? 1 : 0); }

  if (fields.length === 0) return res.status(400).json({ message: "Nada para actualizar." });

  values.push(id);
  const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
  const result = await db.run(sql, values);

  if (result.changes === 0) return res.status(404).json({ message: "Usuario no encontrado." });

  const user = await db.get("SELECT id, colegiado, name, email, dpi, birth_date, role, active FROM users WHERE id = ?", [id]);
  res.json({ message: "Usuario actualizado.", user });
}

// deleteUser: elimina usuario y cascada votes (por FK)
export async function deleteUser(req, res) {
  const db = await openDb();
  const { id } = req.params;

  const result = await db.run("DELETE FROM users WHERE id = ?", [id]);
  if (result.changes === 0) return res.status(404).json({ message: "Usuario no encontrado." });

  res.json({ message: "Usuario eliminado correctamente." });
}

//POST /logout
export async function logoutUser(req, res){
  try{
    const token = req.token; //desde authMiddleware
    if(!token) return res.status(400).json({ message: "Token no encontrado." });

    //obtenemos exp del token (payload). jwt.decode no valida firma.
    const decode = jwt.decode(token);
    const expSec = decoded?.exp; //en segundos unix
    const expiresAt = expSec ? new Date(expSec * 1000).toISOString() : new Date(Date.now() + 60*60*1000).toISOString(); //fallback

    const db = await openDb();
    await db.run(
      "INSERT INTO revoked_tokens (token, expires_at) VALUES (?, ?)",
      [token, expiresAt]
    );

    res.json({ message: "Cierre de sesion exitoso."});
  } catch(err){
    console.error("logoutUser error:", err);
    res.status(500).json({ message: "Error al cerrar sesion. "});
  }
}

//POST /users/register
export async function registerUser(req, res) {
  try {
    const db = await openDb();
    const { colegiado, name, email, dpi, birth_date, password, role } = req.body;

    if ( !colegiado || !name || !email || !dpi || !birth_date || !password) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const existing = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    if (existing) {
      return res.status(409).json({ message: 'El email ya está registrado' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) return res.status(400).json({ message: "Email invalido."});

    const existsCole = await db.get("SELECT 1 FROM users WHERE colegiado = ?", [colegiado]);
    if(existsCole) return res.status(400).json({ message: "Numero de colegiado ya registrado"});

    //valida dpi
    if(!/^\d{13,}$/.test(dpi)) return res.status(400).json({ message: "El DPI debe tener al menos 13 digitos numericos."});
    

    // Validar contraseña mínima
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres, una mayuscual, un numero y un simbolo' });
    }

    const existsDpi = await db.get("SELECT 1 FROM userS WHERE dpi = ?", [dpi]);
    if(existsDpi) return res.status(409).json({ message: "DPI ya registrado."})

    // Hash de contraseña 
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run(
      `INSERT INTO users (colegiado, name, email, dpi, birth_date, password, role, active)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [colegiado, name, email, dpi, birth_date, hashedPassword, role || "voter", 1]
    );

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err){
    console.error('Error al registrar usuario: ', err);
    return res.status(500).json({ message: 'Error interno del servidor'});
  }
}

//POST /users/login
export async function loginUser(req, res) {
  const db = await openDb();
  const { colegiado, dpi, birth_date, password } = req.body;

  if(!colegiado || !dpi || !birth_date || !password){
    return res.status(400).json({ message: "Faltan credenciales."})
  }

  const user = await db.get('SELECT * FROM users WHERE colegiado = ? AND dpi = ? AND birth_date = ? AND active = 1', [colegiado, dpi, birth_date]);
  if(!user){
    return res.status(401).json({ message: 'credenciales invalidas'});
  }

 /* const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }*/

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  //genera token
  const token = generateToken({ id: user.id, colegiado: user.colegiado, role: user.role });
  return res.json({ message: "successful login " ,token });
}

//GET /users (ruta protegida)
export async function getUsers(req, res) {
  const db = await openDb();
  const users = await db.all('SELECT * FROM users');
  return res.json(users);
}
