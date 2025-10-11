import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import JWT from 'jsonwebtoken';

const empleados =[]

const api = express();

api.use(cors());
api.use(morgan());
api.use(express.json());

function validarToken(request, response, next){
    const header = request.headers['authorization'];
    const token = header && header.split(' ')[1];

    try{
        const user = JWT.verify(token, process.env.SECRET);
        request.user = user;
    }catch(error){
        return response.status(401).json({"mensaje": "Token inválido o inexistente"});
    }

    console.log({token});
    next();
}

function existeEmpleado(id){
        for(let i=0; i<empleados.length; i++){
            if(empleados[i].id === id){
                return true;
            }
        }
        return false;
    }

api.get("/", validarToken, (request, response) => {
    const user = request.user;
    console.log({user});
    return response.json({"mensaje": "API funcionando correctamente", empleados});
});

api.post("/", (request, response) => {
    const {id, nombre, rol, correo, telefono} = request.body;

    if(!id || !nombre || !rol || !correo || !telefono){
        return response.status(400).json({"mensaje": "Faltan datos obligatorios"});
    }

    if(existeEmpleado(id)){
        return response.status(409).json({"mensaje": "El empleado ya existe"});
    }

    empleados.push({id, nombre, rol, correo, telefono});
    return response.status(201).json({"mensaje": "Empleado creado correctamente"});
});

api.post("/auth", (request, response) => {
    const {user, pass} = request.body;
    const token = JWT.sign({user}, process.env.SECRET);

    return response.json({token});
});


api.listen(3000, () => {
    console.log(process.env.ENV);
});