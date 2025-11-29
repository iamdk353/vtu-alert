import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGOURL as string);
  isConnected = true;
}
