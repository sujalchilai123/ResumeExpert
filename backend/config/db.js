import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connection host:", conn.connection.host);
    console.log("Mongoose connection name:", conn.connection.name);
  } catch (err) {
    console.error("DB CONNECTION ERROR:", err);
    process.exit(1);
  }
};
