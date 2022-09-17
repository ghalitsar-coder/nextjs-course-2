import React, { useState } from "react";

const CreateHotel = ({ handleClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: 1,
    desc: "",
    image: "",
  });

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Data ${key} kosong`);
        return;
      }
    }
    handleClick(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-y-4">
        <div className="form__inputs flex flex-col">
          <label htmlFor="name">Hotel Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="focus:outline-none border rounded-md p-2 shadow-md "
          />
        </div>
        <div className="form__inputs flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="focus:outline-none border rounded-md p-2 shadow-md "
          />
        </div>
        <div className="form__inputs flex flex-col">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="focus:outline-none border rounded-md p-2 shadow-md "
          />
        </div>
        <div className="form__inputs flex flex-col">
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={formData.desc}
            onChange={handleChange}
            className="focus:outline-none border rounded-md py-1 px-2 shadow-md "
          />
        </div>
        <div className="form__inputs flex flex-col">
          <label htmlFor="image">Hotel Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="focus:outline-none border rounded-md py-1 px-2 shadow-md "
          />
        </div>

        <button
          type="submit"
          className="py-1 px-3 text-white bg-emerald-600 rounded-md border-transparent hover:bg-white hover:text-emerald-600 transition hover:border-emerald-600 hover:border-2 border-2 shadow-md "
        >
          {" "}
          Create!{" "}
        </button>
      </form>
    </>
  );
};

export default CreateHotel;
