import Admin from '../models/Admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';

// Define upload storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Admin Register
export const register = async (req, res) => {
  // Implementation here
};

// Admin Login
export const login = async (req, res) => {
  // Implementation here
};

// Admin Upload Data
export const uploadData = async (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'File upload failed' });
    }
    // Process the uploaded file
    res.status(200).json({ message: 'File uploaded successfully' });
  });
};
