const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        if(!process.env.MONGO_URI){
            throw new error("MONGO_URI is not configured");
        }
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        })
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("Connection failed:", error.message)
        throw error;
    }
}

module.exports = connectDB;