const MockData = require("../models/mockdata");

const getData = async (req, res) => {
  await MockData.findOne((err, data) => {
    if (err) {
      return res.status(500).json({ err });
    }
    return res.status(200).json({ data });
  });
};

module.exports = { getData };
