import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const empleados =[]

const api = express();

api.use(cors());
api.use(morgan());
api.use(express.json());

function existeEmpleado(id){
        for(let i=0; i<empleados.length; i++){
            if(empleados[i].id === id){
                return true;
            }
        }
        return false;
    }

api.get("/", (request, response) => {
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

api.listen(3000);