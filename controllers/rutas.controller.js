const pool = require("../database");

const selectRutas = async (req, res) => {
  const { token } = req.params;
  try {
    const query = "SELECT * FROM rutas WHERE userToken = ?";

    const response = await pool.query(query, [token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const selectRutasById = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query = "SELECT * FROM rutas WHERE iddevice = ? AND userToken = ?";

    const response = await pool.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const addRutas = async (req, res) => {
  const { token } = req.params;
  const { idlugaro, idlugard, fechaI, id_recorrido, iddevice } = req.body;
  const addR = {
    idlugaro,
    idlugard,
    fechaI,
    id_recorrido,
    iddevice,
    userToken: token,
  };
  try {
    const query = "INSERT INTO rutas SET ?";
    const response = await pool.query(query, [addR]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const updateRutas = async (req, res) => {
  const { id, token } = req.params;
  const { idlugaro, idlugard, fechaI, id_recorrido, iddevice } = req.body;
  const updateR = { idlugaro, idlugard, fechaI, id_recorrido, iddevice };
  try {
    const query = "UPDATE rutas SET ? WHERE id_ruta = ? AND userToken = ?";
    const response = await pool.query(query, [updateR, id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteRutas = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query = "DELETE FROM rutas WHERE id_ruta = ? AND userToken = ?";
    const response = await pool.query(query, [id, token]);
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
