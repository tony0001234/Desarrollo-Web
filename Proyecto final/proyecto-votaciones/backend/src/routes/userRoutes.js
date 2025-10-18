import express from "express";
import { registerUser, loginUser, getUsers, updateUser, deleteUser, changePassword } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { logoutUser } from "../controllers/userController.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers); // Ruta protegida

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);

router.put("/:id", authMiddleware, isAdmin, updateUser);
router.put("/:id/password", changePassword);

router.delete("/:id", authMiddleware, isAdmin, deleteUser);

export default router;