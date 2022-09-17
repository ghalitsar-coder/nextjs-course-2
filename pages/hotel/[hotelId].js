import Link from "next/link";
import React from "react";
import Hotel from "../../models/Hotel";
import { connectMongo, disconnectMongo } from "../../utils/db";

const DetailHotel = ({ item }) => {
  return (
    <div className="w-full shadow-lg rounded-lg ">
      <div className="grid gap-y-3 p-3 font-poppins">
        <h2 className="font-semibold text-xl ">
          <Link href={`/hotel/${item.id}`}>{item.name}</Link>
        </h2>
        <h3 className="text-base"> {item.location} </h3>
        <h2 className="text-bold text-lg">${item.price}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          velit facere maxime commodi culpa consequatur modi a laudantium
          reprehenderit excepturi, qui recusandae eius iste dolore odit natus
          deleniti! Tenetur, voluptatem?{" "}
        </p>
      </div>
    </div>
  );
};

export default DetailHotel;

export const getStaticPaths = async ({ params }) => {
  try {
    await connectMongo();
    const hotels = await Hotel.find({}, { _id: 1 });
    await disconnectMongo();
    return {
      fallback: "blocking",
      paths: hotels.map((item) => ({
        params: { hotelId: item._id.toString() },
      })),
    };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
};

export const getStaticProps = async ({ params }) => {
  const { hotelId } = params;
  await connectMongo();
  const hotel = await Hotel.findOne({ _id: hotelId });
  await disconnectMongo();

  try {
    return { props: { item: JSON.parse(JSON.stringify(hotel)) } };
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
};
