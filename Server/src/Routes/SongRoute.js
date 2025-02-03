import { addSong,listSong,removeSong } from "../controllers/SongController.js";
import upload from "../middleware/multer.js"
import express from 'express';
import { adminAuth } from '../middleware/Auth.js';

const songRouter = express.Router();

songRouter.post('/add',upload.fields([{name: "image",maxCount:1}, {name: "audio", maxCount:1}]),adminAuth, addSong);
songRouter.get('/list',listSong);
songRouter.post('/remove',adminAuth, removeSong);

export default songRouter;