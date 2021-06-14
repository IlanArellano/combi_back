const route = require("express").Router();
const {
  selectDevices,
  selectDevicesById,
  addDevices,
  updateDeviesById,
  deleteDeviesById,
} = require("../controllers/device.controller");

route.get("/:token", selectDevices);
route.get("/:token/:id", selectDevicesById);
route.post("/:token", addDevices);
route.put("/:token/:id", updateDeviesById);
route.delete("/:token/:id", deleteDeviesById);

module.exports = route;
