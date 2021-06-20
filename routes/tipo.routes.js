const route = require("express").Router();
const {
  selectTipo,
  selectTipoByNombre,
  addTipo,
  updateTipoById,
  deleteTipoById,
} = require("../controllers/tipo.controller");

route.get("/:token", selectTipo);
route.get("/:token/:nombre", selectTipoByNombre);
route.post("/:token", addTipo);
route.put("/:token/:id", updateTipoById);
route.delete("/:token/:id", deleteTipoById);

module.exports = route;
