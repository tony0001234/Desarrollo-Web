import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contexto from './Contexto/Contexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contexto>
      <App />
    </Contexto>
  </StrictMode>,
)
