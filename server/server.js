import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ToDo } from "./models/ToDo.js";

const uri = process.env.DB_URI;
const app = express();
const { Schema } = mongoose;
app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/facilities", async (req, res) => {
  console.log("server says: facilities loaded");
});
app.post("/facility/new", (req, res) => {
  console.log("new facility added");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
