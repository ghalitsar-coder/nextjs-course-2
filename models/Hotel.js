import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Must Provide Hotel Name"]
    },
    price:{
        type: Number,
        required:[true,"Must Provide Hotel Price"]

    },
    location:{
        type: String,
        required:[true,"Must Provide Hotel Location"]

    },
    desc:{
        type: String,
        required:[true,"Must Provide Hotel Description"]

    },
    image:{
        type: String,
        required:[true,"Must Provide Hotel Image"]

    },
},{timestamps:true})

const Hotel =  mongoose.models.Hotel || mongoose.model("Hotel",HotelSchema)
export default Hotel