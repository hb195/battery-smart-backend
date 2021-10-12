const Alert = require("../models/alert");

//GET - All Alerts
const listAlerts = async (req, res) => {
  await Alert.find((err, alerts) => {
    if (err) {
      return res.status(500).json({ err });
    }
    return res.status(200).json({ data: alerts });
  });
};

//GET - Single Alert
const getAlert = async (req, res) => {
  const _id = req.params && req.params._id;

  await Alert.findOne({ _id: _id }, (err, alerts) => {
    if (err) {
      return res.status(500).json({ err });
    }
    return res.status(200).json({ data: alerts });
  });
};

//POST - Create Alert
const createAlert = async (req, res) => {
  const alertBody = req && req.body;
  const alert = new Alert(alertBody);
  await alert.save((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    return res.status(200).json({ data });
  });
};

//PUT - Update Alert
const updateAlert = async (req, res) => {
  //to be updated
  const _id = req && req.params && req.params._id;
  await Alert.findOne({ _id }, (err, alert) => {
    if (err) {
      return res.status(400).json({ err });
    }
  });
};

const removeAlert = async (req, res) => {
  const _id = req && req.params && req.params._id;
  await Alert.findOne({ _id }, (err, alert) => {
    if (err) {
      return res.status(404).json({ err });
    }
    alert.remove((err, deletedProduct) => {
      if (err) {
        return res.status(400).json({ err });
      }
      return res.status(200).json({ data: deletedProduct });
    });
  });
};

module.exports = { listAlerts, createAlert, getAlert, removeAlert };
