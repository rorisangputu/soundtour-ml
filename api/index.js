import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from '../api/Routes/userRoute.js'

const app = express();
dotenv.config();
const port = process.env.PORT || 8800;

const connect = async () => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(process.env.MONGO_CON);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
  }
};

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// CORS Config
const corsOptions = {
  
  origin: "https://www.soundtour.co.za", // Specify your front-end URL or use "*" for any origin
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Use user routes

app.use('/', userRoutes); // Mount the user routes on the root path

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Listening on port ${port}`);
});
