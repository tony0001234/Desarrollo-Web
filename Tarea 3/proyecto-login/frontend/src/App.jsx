import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useUser } from './context/UserContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const { user, logout } = useUser();

  return (
  <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <Link className="navbar-brand" to="/">Sistema de Usuarios</Link>
        <div className="ms-auto d-flex align-items-center">
          {user ? (
            <>
              <Link to="/perfil" className="text-light me-3 text-decoration-none">
                👋 Hola, {user.name.split(" ")[0]}
              </Link>
              <button className="btn btn-outline-light btn-sm" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-light me-2" to="/register">Registro</Link>
              <Link className="btn btn-outline-light" to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>

      {/* Contenido */}
      <div className="container mt-5">
        <Routes>
        <Route path="/" element={<h2 className="text-center">Bienvenido al Sistema de Usuarios</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Ruta protegida */}
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>

      <footer className="text-center mt-5 mb-3 text-muted">
        <p>© {new Date().getFullYear()} Sistema de Usuarios — Anthony F. Ramírez Orellana</p>
      </footer>
    </Router>
  );
}