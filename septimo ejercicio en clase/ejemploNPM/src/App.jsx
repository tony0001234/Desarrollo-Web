import { useState } from 'react'
import './App.css'

import Encabezado, {Cuerpo} from './componentes/Encabezado';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Estudiantes = [
    {nombre: "juan", apellido: "Baten"},
    {nombre: "Nery", apellido: "Rodas"},
    {nombre: "Ana", apellido: "Rebolorio"}
  ]

  return (
    <>
      <div>
        <Encabezado/>
        <Encabezado/>

        {Estudiantes.map(function(valor) {
          return <Cuerpo {...valor}/>
        })} 

        <Cuerpo nombre="juan" apellido="Baten"/>
        <Cuerpo nombre="Ana"apellido="Rebolorio">
          <p>Contenido adicional</p>
        </Cuerpo>
        <Cuerpo nombre="Nery" apellido="Rodas"/>
        
      </div>
    </>
  )
}

export default App
