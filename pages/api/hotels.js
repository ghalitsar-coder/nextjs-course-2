import Hotel from "../../models/Hotel";
import { connectMongo, disconnectMongo } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("YES I AM IN");
      await connectMongo();
      const hotel = await Hotel.create(req.body);
      res.status(201).json(hotel);
      await disconnectMongo();
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
}
