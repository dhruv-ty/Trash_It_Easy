const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  itemtype: {
    type: String,
    required: true,
  },
  bidprice: {
    type: Number,
    required: true,
  },
  working: {
    typr: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
