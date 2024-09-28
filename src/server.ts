import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes';
// import { json } from 'body-parser';
import db from './config/db';

dotenv.config();

const app = express();

app.use(express.json())
app.use('/api/contacts', contactRoutes);


db();