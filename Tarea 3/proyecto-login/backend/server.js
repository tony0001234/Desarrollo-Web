import express from "express";
import cors from "cors";
import { users } from "./data/users.js";

const app = express();

// ============================================
// CONFIGURACIÓN DE CORS MEJORADA
// ============================================
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://tu-app.netlify.app', // ⚠️ REEMPLAZA CON TU URL DE NETLIFY
  // Agrega más orígenes si es necesario
];

app.use(cors({
  origin: function(origin, callback) {
    // Permitir peticiones sin origin (como Postman, apps móviles)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(null, true); // En producción cambia a false para más seguridad
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ============================================
// MIDDLEWARE DE LOGGING
// ============================================
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ============================================
// HEALTH CHECK - Para mantener el servidor activo
// ============================================
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// ============================================
// RUTA PRINCIPAL DE PRUEBA
// ============================================
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando correctamente ✅");
});

// ============================================
// RUTA PARA REGISTRAR USUARIOS
// ============================================
app.post("/register", (req, res) => {
  console.log('📝 Registro - Request recibido');
  
  const {name, dpi, email, password} = req.body;

  // Validar que no existan campos vacíos
  if(!name || !dpi || !email || !password) {
    console.log('❌ Registro - Campos vacíos');
    return res.status(400).json({message: "Todos los campos son obligatorios"});
  }

  // Validar unicidad del dpi
  const dpiExists = users.find(user => user.dpi === dpi);
  if(dpiExists) {
    console.log('❌ Registro - DPI duplicado:', dpi);
    return res.status(400).json({message: "El DPI ya está registrado"});
  }

  // Validar unicidad del email
  const emailExists = users.find(user => user.email === email);
  if(emailExists) {
    console.log('❌ Registro - Email duplicado:', email);
    return res.status(400).json({message: "El email ya está registrado"});
  }

  // Validar formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    console.log('❌ Registro - Email inválido:', email);
    return res.status(400).json({message: "El formato del email es inválido"});
  }

  // Validar dpi (debe tener 13 dígitos)
  if(!/^\d{13}$/.test(dpi)) {
    console.log('❌ Registro - DPI formato incorrecto:', dpi);
    return res.status(400).json({message: "El DPI debe tener 13 dígitos"});
  }

  // Validar contraseña mínima
  if(password.length < 6) {
    console.log('❌ Registro - Contraseña muy corta');
    return res.status(400).json({message: "La contraseña debe tener al menos 6 caracteres"});
  }

  const newUser = {name, dpi, email, password};
  users.push(newUser);

  console.log('✅ Registro exitoso:', email);
  return res.status(201).json({message: "Usuario registrado exitosamente"});
});

// ============================================
// RUTA PARA LOGIN - MEJORADA
// ============================================
app.post("/login", (req, res) => {
  console.log('🔐 Login - Request recibido:', new Date().toISOString());
  console.log('📧 Login - Email:', req.body.email);
  
  const {email, password} = req.body;

  // Validar campos vacíos
  if(!email || !password) {
    console.log('❌ Login - Campos vacíos');
    return res.status(400).json({message: "Email y contraseña son obligatorios"});
  }

  // Buscar usuario
  const user = users.find(user => user.email === email && user.password === password);
  
  if(!user) {
    console.log('❌ Login - Credenciales inválidas para:', email);
    return res.status(401).json({message: "Credenciales inválidas"});
  }

  console.log('✅ Login exitoso para:', email);
  
  // Si coincide, devolver éxito
  return res.status(200).json({
    message: "Inicio de sesión exitoso.",
    user: { name: user.name, email: user.email, dpi: user.dpi },
  });
});

// ============================================
// MANEJO DE RUTAS NO ENCONTRADAS
// ============================================
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// ============================================
// MANEJO DE ERRORES GLOBAL
// ============================================
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ 
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ============================================
// INICIAR SERVIDOR
// ============================================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
  console.log(`📍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`⏰ Iniciado: ${new Date().toISOString()}`);
});