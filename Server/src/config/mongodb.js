import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connection.on('connected' , ()=>{
        console.log("Database Connected Successfully")
    })
    // await mongoose.connect(`${process.env.MONGODB_URI}/spotify` || "mongodb://localhost:27017/")
    await mongoose.connect("mongodb://localhost:27017/")
}

export default connectDB;