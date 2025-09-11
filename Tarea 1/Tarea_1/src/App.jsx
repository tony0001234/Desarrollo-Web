import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Pagina1 from './pages/Home.jsx';
import Pagina2 from './pages/Pagina2.jsx';
import Pagina3 from './pages/Pagina3.jsx';
import Pagina4 from './pages/Pagina4.jsx';
import Pagina5 from './pages/Pagina5.jsx';
import Pagina6 from './pages/Pagina6.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Router>
      <div className="w-100">
        <img
          src="https://www.shutterstock.com/image-illustration/technology-banner-integrated-radar-screen-260nw-15130558.jpg"  
          alt="Banner"
          className="img-fluid w-100 banner-img"
          style={{ height: '200px', objectFit: 'cover' }} 
        />
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
        <div className="container-fluid px-3">
          <Link className="navbar-brand fw-bold" to="/">
            Cursos Ingenieria en Sistemas
          </Link>
          
          {/* Botón hamburguesa para móviles */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-controls="navbarNav" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" onClick={() => setIsCollapsed(true)}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagina2" onClick={() => setIsCollapsed(true)}>
                  Página 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagina3" onClick={() => setIsCollapsed(true)}>
                  Página 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagina4" onClick={() => setIsCollapsed(true)}>
                  Página 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagina5" onClick={() => setIsCollapsed(true)}>
                  Página 5
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pagina6" onClick={() => setIsCollapsed(true)}>
                  Página 6
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="w-100">
        <Routes>
          <Route path="/" element={<Pagina1 />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
          <Route path="/pagina4" element={<Pagina4 />} />
          <Route path="/pagina5" element={<Pagina5 />} />
          <Route path="/pagina6" element={<Pagina6 />} />
        </Routes>
      </main>

    </Router>
  );
}