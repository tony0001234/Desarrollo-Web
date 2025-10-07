import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ name: "", dpi: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await axios.post("https://registro-login-tarea3.onrender.com/register", form);
            alert("Usuario registrado exitosamente");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Error en el servidor");
        }
    };

    return (
        <div className="col-md-6 mx-auto mt-5">
            <h2 className="text-center mb-4 text-primary">Registro de Usuario</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label className="form-label">Nombre completo</label>
                    <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">DPI</label>
                    <input name="dpi" className="form-control" value={form.dpi} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input name="password" type="password" className="form-control" value={form.password} onChange={handleChange} required />
                </div>
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
        </div>
  );
}