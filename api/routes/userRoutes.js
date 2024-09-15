import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/search', userController.searchData);

export default router;
