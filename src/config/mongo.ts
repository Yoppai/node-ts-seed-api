import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config()



const dbConnect = async () => {
    const DB_URI = process.env.DB_PATH
    await mongoose.connect(DB_URI)
}

export { dbConnect }