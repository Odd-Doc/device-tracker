import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Facility } from "./models/facility.model.js";
const uri = process.env.DB_URI;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(uri);

app.get("/facilities", async (req, res) => {
  const allFacilities = await Facility.find()
    .select({ name: 1, street: 1, city: 1, state: 1, zip: 1 })
    .lean();
  res.json(allFacilities);
});
app.post("/facility/new", (req, res) => {
  const newFacility = new Facility({
    name: req.body.name,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });
  newFacility.save();
  res.json(newFacility);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
