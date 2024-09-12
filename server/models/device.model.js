import mongoose from "mongoose";
import { DeviceGeo } from "./deviceGeo.model.js";
const Schema = mongoose.Schema;

//backflow device schema & model

const deviceGeoSchema = new Schema({
  lat: { type: String },
  long: { type: String },
});

const deviceSchema = new Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  size: { type: String, required: true },
  type: { type: String, required: true },
  serialNumber: { type: String, required: true },
  locationDescription: { type: String, required: true },
  mapGeo: [deviceGeoSchema],
});

export const Device = mongoose.model("facility-device", deviceSchema);
