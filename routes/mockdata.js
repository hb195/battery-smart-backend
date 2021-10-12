const express = require("express");
const { getData } = require("../controllers/mockdata");
const router = express.Router();

router.get("/mockdata", getData);

module.exports = router;
