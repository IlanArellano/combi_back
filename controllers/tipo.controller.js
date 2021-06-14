const pool = require("../database");

const selectTipo = async (req, res) => {
  try {
    const query = "SELECT * FROM tipo";
    const response = await pool.query(query);

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const selectTipoByNombre = async (req, res) => {
  const { nombre } = req.params;
  try {
    const query = "SELECT * FROM tipo WHERE nombre = ?";
    const response = await pool.query(query, [nombre]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const addTipo = async (req, res) => {
  const { nombre, id_device } = req.body;
  try {
    const addT = { nombre, id_device };
    const query = "INSERT INTO tipo SET ?";
    const response = pool.query(query, [addT]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const updateTipoById = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const updateD = { nombre };
    const query = "UPDATE tipo SET ? WHERE id = ?";
    const response = await pool.query(query, [updateD, id]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteTipoById = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "DELETE FROM tipo WHERE id = ?";
    const response = await pool.query(query, [id]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  selectTipo,
  selectTipoByNombre,
  addTipo,
  updateTipoById,
  deleteTipoById,
};
