import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getUsers, updateUser, deleteUser } from '../controllers/usersController.js';

const router = express.Router();

//Rutas protegidas
router.get('/', verifyToken, getUsers);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;