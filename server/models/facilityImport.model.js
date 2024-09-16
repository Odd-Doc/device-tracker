import mongoose from "mongoose";
import { Device } from "./device.model.js";
const Schema = mongoose.Schema;

//backflow device schema & model

const facilityImportSchema = new Schema({
  locationid: { type: Number },
  company: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  phone: { type: String },
  devices: { type: [Device.schema], required: false },
});

export const FacilityImport = mongoose.model(
  "facility-imports",
  facilityImportSchema
);
