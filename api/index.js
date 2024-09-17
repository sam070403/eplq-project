import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
app.use(cookieParser());

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
  credentials: true
}));
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect("mongodb+srv://samyakadhau2003:ZD8rVXkSzXGSSahM@eplq.4o28y.mongodb.net/?retryWrites=true&w=majority&appName=eplq", {
}).then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Database connection error:', err);
});

// Define Routes
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
