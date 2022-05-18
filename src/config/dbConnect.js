import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Alura:123@alura.lx2vx.mongodb.net/Alura-node");

let db = mongoose.connection;

export default db;