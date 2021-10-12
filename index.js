require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const alertAPI = require("./routes/alert");
const mockdataAPI = require("./routes/mockdata");
const authAPI = require("./routes/auth");

app.use("/api", alertAPI);
app.use("/api", mockdataAPI);
app.use("/api", authAPI);
app.get("/", (req, res) => {
  res.json({ msg: "API Working!!" });
});

app.get("/favicon.ico", (req, res) => {
  res.json({ msg: "API Working!!" });
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log("APP running on PORT: " + PORT);
});
