import mongoose from "mongoose";
import { NODE_ENV, DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    `Cant find DB_URI evironment variable in .env.${NODE_ENV}.local`
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to mongodb server in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
