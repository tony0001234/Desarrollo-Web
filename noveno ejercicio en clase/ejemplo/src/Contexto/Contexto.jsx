import { createContext, useContext, useState } from "react";

const ContAuth = createContext()

export default function Contexto(props){
    const {children} = props

    const [sesion, setSesion] = useState("")

    function Autenticar(user, pass){
        if(user === "admin" && pass === "admin"){
            setSesion(user)
            return true
        } else{
            return false
        }
    }
    return(
        <ContAuth.Provider value={{sesion, setSesion, Autenticar}}>
            {children}
        </ContAuth.Provider>
    )
}

export function getContext(){
    return useContext(ContAuth)
}