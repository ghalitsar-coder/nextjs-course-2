import mongoose from "mongoose";

export const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://ghalitsar:ember1233@cluster0.paaz9mo.mongodb.net/traveloka?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
export const disconnectMongo = async () => mongoose.connection.close();
