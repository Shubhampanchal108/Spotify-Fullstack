import express from 'express'
import {addAlbum,listAlbum,removeAlbum, adminLogin} from '../controllers/AlbumController.js';
import upload from '../middleware/multer.js'
import { adminAuth } from '../middleware/Auth.js';

const albumRouter = express.Router();

albumRouter.post("/admin-login", adminLogin)
albumRouter.post('/add',upload.single('image'),adminAuth, addAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove',adminAuth, removeAlbum);

export default albumRouter;