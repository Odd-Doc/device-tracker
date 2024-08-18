import mongoose from "mongoose";
const { Schema } = mongoose;
const facility = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Boolean,
    default: false,
  },
});

const Facility = new mongoose.model("facilities", facility);

export { Facility };
