import { useState } from 'react'
import './App.css'
import axios from 'axios';

export default function App() {
  
  const testConnection = async () => {
    const res = await axios.get('http://localhost:3001/');
    alert(res.data);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">¡Hola desde React + Bootstrap!</h1>
      <p className="text-center">Tu configuración con Vite está funcionando correctamente 🎉</p>
      <button className="btn btn-success d-block mx-auto" onClick={testConnection}>Probar botón Bootstrap</button>
    </div>
  );
}