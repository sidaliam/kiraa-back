import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authroute from "./routes/auth.js";
import usersroute from "./routes/users.js";
import orderroute from "./routes/Order.js";
import hotelsroute from "./routes/hotels.js";
import roomsroute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connecté a mongodb!");
  } catch (error) {
    throw error;
  }
};
// Configuration CORS pour autoriser uniquement une origine spécifique
const corsOptions = {
  origin: ["http://localhost:3000","https://kiraaserv.onrender.com","https://kiraserv.onrender.com","https://localhost","https://kiraaadmin.onrender.com","192.168.100.5:3000","https://kiraadz.com","http://kiraadz.com","kiraadz.com"], // Remplacez par le domaine de votre frontend déployé
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authroute);
app.use("/api/hotels", hotelsroute);
app.use("/api/rooms", roomsroute);
app.use("/api/users", usersroute);
app.use("/api/orders", orderroute);

app.listen(process.env.PORT || 5000, () => {
  connect();
  console.log("connecté au serveur");
});
