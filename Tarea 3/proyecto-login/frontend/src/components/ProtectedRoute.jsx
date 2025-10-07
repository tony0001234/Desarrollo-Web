import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

/*Componente para proteger rutas privadas
solo muestra contenido si el usuario inicio sesion */

export default function ProtectedRoute({ children }) {
    const { user } = useUser();

    //si el usuairo no esta logueado redirige a login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    //si esta logueado muestra el contenido
    return children;
}