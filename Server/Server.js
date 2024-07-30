import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/Routes/SongRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudniary.js';
import albumRouter from './src/Routes/AlbumRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

// Default route
app.get('/', (req, res) => {
    res.send('Hello from server');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
