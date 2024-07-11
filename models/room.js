import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    marque: {
      type: String,
      required: true,
    },
    modéle: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    couleur: {
      type: String,
      required: true,
    },
    année: {
      type: String,
      required: true,
    },
    disponible: {
      type: Boolean,
      default: true,
      required: false,
    },
    moteur: {
      type: String,
    },
    description: {
      type: String,
    },
    roomNumbers: [
      { number: Number, unavailableDates: { type: [Date] }, Heure: Number },
    ],
    idHote: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Hote", 
    },
    hotelDetails: {
      name: String,
      city: String,
      address: String,
      cheapestPrice: Number,
      desc: String,
      distance: String,
      title: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
