import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { users } from './data/users.js';
import userRoutes from './routes/users.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//endpoint de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    
    res.json({ message: 'Login exitoso', token });
});

//rutas protegidas
app.use('/users', userRoutes);
console.log('JWT_SECRET:', !!process.env.JWT_SECRET);
console.log('JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

