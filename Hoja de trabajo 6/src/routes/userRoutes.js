import express from 'express';
import {createUser, getUsers, updateUserContorller, deleteUserController} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.put('/users/:dpi', updateUserContorller);
router.delete('/users/:dpi', deleteUserController);

export default router;