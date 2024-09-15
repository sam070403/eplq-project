import express from 'express';
import * as adminController from '../controllers/adminController.js';
import { verifyAdmin } from '../config/verifyUser.js';


const router = express.Router();

// Admin routes
router.post('/register', adminController.register);
router.post('/login', adminController.signin);
router.post('/upload', adminController.uploadData);
router.post('/google', adminController.google);


export default router;
