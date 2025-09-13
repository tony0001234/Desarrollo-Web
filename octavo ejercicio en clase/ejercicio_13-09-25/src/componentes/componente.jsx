import { use, useState } from "react";
import { useEffect, useRef, useReducer} from "react";

export default function Componente() {
    
    //let nombre = "Juan";
    const [nombre, setNombre] = useState("Juan");
    const referencia = useRef("Lemus");

    const [sesion, dispatch] = useReducer(cambioEstado, {estado: "deslogeado"});

    function cambioEstado(estado, accion) {
        console.log(estado);
        if(accion.type === "LOGIN") {
            return {estado: "logeado"};
        } else if(accion.type === "LOGOUT") {
            return {estado: "deslogeado"};
        } else {
            return {estado: "desconocido"};
        }
    }

    useEffect(function(){
        console.log("Algo ha cambiado");
    }, [nombre]);

    function cambioNombre(nombre) {
        setNombre(nombre);
        console.log("cambio de nombre", nombre);
    }

    return (
        <>
            <h1>Estudiante {nombre}</h1>

            <h2>Estado de la sesion: {sesion.estado}</h2>

            <p>{referencia.current.value}</p>
            <input type="text" 
                ref={referencia}
            />
            <button onClick={function(){console.log(referencia.current.value)}}>Mostrar valor</button>
            <button onClick={function(){cambioNombre("Henry")}}>Cambio de nombre</button>
            <button onClick={function(){cambioNombre("Keily")}}>Cambio de nombre2</button>

            <button onClick={()=>{dispatch( {type:"LOGIN"} )}}>LOGIN</button>
            <button onClick={()=>{dispatch({type:"LOGOUT"})}}>LOGOUT</button>
            <button onClick={()=>{dispatch({type:"OTRO"})}}>OTRO</button>
        </>
    )
}