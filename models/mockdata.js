const mongoose = require("mongoose");

const MockDataSchema = new mongoose.Schema(
  {
    series: [{ type: Object }],
    options: {
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MockData", MockDataSchema);
