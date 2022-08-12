import mongoose from "mongoose";

mongoose.connect('mongodb+srv://alura:123@alura.cwdtfyi.mongodb.net/aluraNode')

const db = mongoose.connection;

export default db;