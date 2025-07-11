import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/app');
        console.log("MongoDB connected");
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
    }
}

export default connectDB;