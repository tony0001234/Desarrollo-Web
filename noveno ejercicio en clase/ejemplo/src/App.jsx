import { useState } from 'react'
import './App.css'
import Login from './Login/Login.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <Dashboard/>
      
    </>
  )
}

export default App
