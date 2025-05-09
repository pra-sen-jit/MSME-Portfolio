// /backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter.js';
import productRouter from './routes/productRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// For ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Middleware 
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE"]
}));

app.use(express.json());

// Serve static files from /uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send("Hello! Server is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
