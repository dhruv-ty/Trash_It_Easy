const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  typeOfWaste: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Request", requestSchema);
