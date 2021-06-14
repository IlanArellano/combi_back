const route = require("express").Router();

const {
  selectRutas,
  selectRutasById,
  addRutas,
  updateRutas,
  deleteRutas,
} = require("../controllers/rutas.controller");

route.get("/", selectRutas);
route.get("/:id", selectRutasById);
route.post("/", addRutas);
route.put("/:id", updateRutas);
route.delete("/:id", deleteRutas);

module.exports = route;
