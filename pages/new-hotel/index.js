import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CreateHotel } from "../../components";
const NewHotel = () => {
  const router = useRouter();
  const handleSubmit = async (hotelObj) => {
    await axios.post("/api/hotels", hotelObj);
    alert("Data Berhasil Dibuat!");
    router.replace("/");
  };
  return (
    <div className=" rounded-lg mx-4 shadow-lg px-3 py-4  ">
      <h1 className="text-4xl mb-5 font-bold text-center">Add New Hotel</h1>
      <CreateHotel handleClick={handleSubmit} />
    </div>
  );
};

export default NewHotel;
