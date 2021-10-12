const express = require("express");
const {
  listAlerts,
  createAlert,
  getAlert,
  removeAlert,
} = require("../controllers/alert");
const router = express.Router();

router.get("/alert/getAlerts", listAlerts);
router.get("/alert/getAlert/:_id", getAlert);
router.post("/alert/createAlert", createAlert);
router.delete("/alert/removeAlert/:_id", removeAlert);
module.exports = router;
