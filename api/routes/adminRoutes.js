import express from 'express';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

// Admin routes
router.post('/register', adminController.register);
router.post('/login', adminController.login);
router.post('/upload', adminController.uploadData);

export default router;
