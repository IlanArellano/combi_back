const pool = require("../database");

const selectRutas = async (req, res) => {
  try {
    const query = "SELECT * FROM rutas";

    const response = await pool.query(query);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const selectRutasById = async (req, res) => {
  const { id } = req.params;
  try {
    const query =
      "SELECT * FROM rutas AS r JOIN recorrido AS re ON r.id_recorrido = re.id_recorrido WHERE iddevice = ?";

    const response = await pool.query(query, [id]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const addRutas = async (req, res) => {
  const { idlugaro, idlugard, fechaI, id_recorrido, iddevice } = req.body;
  const addR = { idlugaro, idlugard, fechaI, id_recorrido, iddevice };
  try {
    const query = "INSERT INTO rutas SET ?";
    const response = await pool.query(query, [addR]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const updateRutas = async (req, res) => {
  const { id } = req.params;
  const { idlugaro, idlugard, fechaI, id_recorrido, iddevice } = req.body;
  const updateR = { idlugaro, idlugard, fechaI, id_recorrido, iddevice };
  try {
    const query = "UPDATE rutas SET ? WHERE id_ruta = ?";
    const response = await pool.query(query, [updateR, id]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteRutas = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "DELETE FROM rutas WHERE id_ruta = ?";
    const response = await pool.query(query, [id]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  selectRutas,
  selectRutasById,
  addRutas,
  updateRutas,
  deleteRutas,
};
