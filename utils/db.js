import mongoose from "mongoose";

export const connectMongo = async () =>
  mongoose.connect(process.env.MONGODB_URI);
export const disconnectMongo = async () => mongoose.connection.close();
