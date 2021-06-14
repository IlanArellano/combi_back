const route = require("express").Router();
const {
  selectRecorrido,
  selectRecorridoById,
  addRecorrido,
  deleteRecorrido,
  deleteRecorridoById,
  updateRecorrido,
  updateRecorridoGeneralByNombre,
} = require("../controllers/recorrido.controller");

route.get("/:token", selectRecorrido);
route.get("/:token/:id", selectRecorridoById);
route.post("/:token", addRecorrido);
route.put("/:token/:id", updateRecorrido);
route.put("/config/:token/:id", updateRecorridoGeneralByNombre);
route.delete("/:token/:id", deleteRecorridoById);
route.delete("/config/:token/:id", deleteRecorrido);

module.exports = route;
