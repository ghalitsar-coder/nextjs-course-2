import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-1/2 shadow-lg rounded-lg ">
      <div className="max-w-full max-h-lg">
        <img
          src={item.image}
          className="w-full h-full object-cover"
          layout="responsive"
          width="100%"
          height="100%"
          alt="hotel-image"
        />
      </div>
      <div className="grid gap-y-3 p-3 font-poppins">
        <h2 className="font-semibold text-xl ">
          <Link href={`/hotel/${item._id}`}>{item.name}</Link>
        </h2>
        <h3 className="text-base"> {item.location} </h3>
        <h2 className="text-bold text-lg">${item.price}</h2>
      </div>
    </div>
  );
};

export default Card;
