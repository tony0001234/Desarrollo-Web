import { useUser } from "../context/UserContext";

export default function Perfil() {
    const { user } = useUser();

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-11 col-sm-8 col-md-6 col-lg-4">
        <h2 className="text-center mb-4 text-primary">Mi Perfil</h2>
        <div className="card p-4 shadow-sm border-0">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>DPI:</strong> {user.dpi}</p>
          <p className="text-success fw-semibold">Sesión activa ✅</p>
        </div>
      </div>
    </div>
  );
}