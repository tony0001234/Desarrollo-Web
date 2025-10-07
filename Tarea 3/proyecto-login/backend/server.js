import express from "express";
import cors from "cors";
import { users } from "./data/users.js";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//ruta principal de prueba
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando correctamente");
});

//Ruta para registrar usuarios
app.post("/register", (req, res) => {
    const {name, dpi, email, password} = req.body;

    //Validar que no existan campos vacíos
    if(!name || !dpi || !email || !password) {
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    //validar unicidad del dpi
    const dpiExists = users.find(user => user.dpi === dpi);
    if(dpiExists) {
        return res.status(400).json({message: "El DPI ya está registrado"});
    }

    //validar unicidad del email
    const emailExists = users.find(user => user.email === email);
    if(emailExists) {
        return res.status(400).json({message: "El email ya está registrado"});
    }

    //validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        return res.status(400).json({message: "El formato del email es inválido"});
    }

    //validar dpi (debe tener 13 dígitos)
    if(!/^\d{13}$/.test(dpi)) {
        return res.status(400).json({message: "El DPI debe tener 13 dígitos"});
    }

    //validar contraseña minima
    if(password.length < 6) {
        return res.status(400).json({message: "La contraseña debe tener al menos 6 caracteres"});
    }

    const newUser = {name, dpi, email, password};
    users.push(newUser);

    return res.status(201).json({message: "Usuario registrado exitosamente"});
});

//Ruta para login
app.post("/login", (req, res) => {
    const {email, password} = req.body;

    //validar campos vacios
    if(!email || !password) {
        return res.status(400).json({message: "Email y contraseña son obligatorios"});
    }

    //buscar usuario
    const user = users.find(user => user.email === email && user.password === password);
    if(!user) {
        return res.status(401).json({message: "Credenciales inválidas"});
    }

    // Si coincide, devolver éxito
    return res.status(200).json({
        message: "Inicio de sesión exitoso.",
        user: { name: user.name, email: user.email, dpi: user.dpi },
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

