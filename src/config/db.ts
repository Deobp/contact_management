import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './../routes/contactRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/contacts', contactRoutes);
async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
    });

    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB!!!', error);
    process.exit(1);
  }
}

export default db;
