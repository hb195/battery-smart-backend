const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    criteria: {
      type: String,
    },
    value: {
      type: Number,
    },
    priceSignal: {
      type: String,
    },
    days: [{ type: Object }],
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alert", AlertSchema);
