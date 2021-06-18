const route = require("express").Router();

const {
  selectRutas,
  selectRutasById,
  addRutas,
  updateRutas,
  deleteRutas,
} = require("../controllers/rutas.controller");

route.get("/:token", selectRutas);
route.get("/:token/:id", selectRutasById);
route.post("/:token", addRutas);
route.put("/:token/:id", updateRutas);
route.delete("/:token/:id", deleteRutas);

module.exports = route;
