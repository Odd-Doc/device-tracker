import mongoose from "mongoose";
const Schema = mongoose.Schema;

//backflow device schema & model

const deviceSchema = new Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  serialNumber: { type: String, required: true },
  location: { type: String, required: true },
  mapGeo: { type: JSON },
});

export const Device = mongoose.model("facility-device", deviceSchema);
