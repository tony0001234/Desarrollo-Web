import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

//Rutas
app.use("/", userRoutes);

//puerto dimamico (para Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
