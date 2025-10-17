import { verifyToken } from "../utils/jwt.js";
import { openDb } from "../database/database.sqlite";

export async function authMiddleware(req, res, next) {
    try{
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Token no proporcionado" });
        }

        const parts = authHeader.split(" ");
        if(parts.length !== 2 || parts[0] !== "Bearer"){
            return res.status(401).json({ message: "Formato del token invalido." });
        }

        const token = parts[1];

        // comporvar revocacion
        const db = await openDb();
        const revoked = await db.get("SELECT 1 FROM revoked_tokens WHERE token = ? LIMIT 1", [token]);
        if(revoked){
            return res.status(401).json({ message: "Token revocado. haga login de nuevo."});
        }

        // verificar token (validez y expiracion)
        const decoded = verifyToken(token);
        if (!decoded) {
            return res.status(401).json({ message: "token invalido o expirado" });
        }


        req.user = decoded; //Guardar datos del usuario en la request
        req.token = token; //util si necesitamos revocar en controlador
        next();
    }catch(err){
        console.error("authMiddleware error:", err);
        res.status(500).json({ message: "Error en la autenticacion."});
    }
}