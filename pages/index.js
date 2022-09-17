import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Hotel from "../models/Hotel";
import { connectMongo, disconnectMongo } from "../utils/db";

export default function Home(props) {
  const { data } = props;
  return (
    <div className="grid place-items-center gap-y-4">
      {data.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    await connectMongo();
    const hotels = await Hotel.find();
    await disconnectMongo();
    return { props: { data: JSON.parse(JSON.stringify(hotels)) } };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
};
