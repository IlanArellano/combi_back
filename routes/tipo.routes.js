const route = require("express").Router();
const {
  selectTipo,
  selectTipoByNombre,
  addTipo,
  updateTipoById,
  deleteTipoById,
} = require("../controllers/tipo.controller");

route.get("/", selectTipo);
route.get("/:nombre", selectTipoByNombre);
route.post("/", addTipo);
route.put("/:id", updateTipoById);
route.delete("/:id", deleteTipoById);

module.exports = route;
