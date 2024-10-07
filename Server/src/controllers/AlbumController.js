import { v2 as cloudinary } from "cloudinary";
import albumModel from "../Models/albumModel.js";

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });

        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        };

        const album = albumModel(albumData);
        await album.save();

        res.json({ success: true, message: "Album added successfully" });
    } catch (error) {
        res.json({ success: false, message: "Failed to add album" });
        console.log(error);
    }
};

//Fetching All the albums
const listAlbum = async (req, res) => {
    try {
        const allAlbums = await albumModel.find({});
        res.json({ success: true, albums: allAlbums });
    } catch (error) {
        res.json({ success: false, message: "Failed to fetch albums" });
        console.log(error);
    }
};

//Remove Album from list
const removeAlbum = async (req, res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Album removed successfully" });
    } catch (error) {
        res.json({ success: false, message: "Failed to remove album" });
        console.log(error);
    }
};

export { addAlbum, listAlbum, removeAlbum };
