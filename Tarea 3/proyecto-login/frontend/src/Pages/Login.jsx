import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";


export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useUser();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post("https://registro-login-tarea3.onrender.com//login", form);
            login(response.data.user); // Actualiza el contexto global
            alert(`Bienvenido, ${response.data.user.name}`);
            navigate("/");  //regirige a home o dashboard
        } catch (err) {
            setError(err.response?.data?.message || "Error en el servidor");
        }  
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4">
        <h2 className="text-center mb-4 text-success">Inicio de Sesión</h2>
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-white">
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="alert alert-danger text-center">{error}</div>}
          <button type="submit" className="btn btn-success w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}