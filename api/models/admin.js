import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Other fields as necessary
});

export default mongoose.model('Admin', adminSchema);
