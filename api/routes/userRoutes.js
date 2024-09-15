import express from 'express';
import {getAllUsers, signout,deleteUser,updateUser} from '../controllers/userController.js';
import { verifyAdmin,verifyToken } from '../config/verifyUser.js';

const router = express.Router();

// User routes
router.post('/signout', signout);
router.get('/getusers',verifyAdmin,getAllUsers);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);

export default router;
