const pool = require("../database");

const selectDevices = async (req, res) => {
  const { token } = req.params;
  try {
    const query = "SELECT * FROM dispositivos WHERE userToken = ?";
    const response = await pool.query(query, [token]);

    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const selectDevicesById = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query = "SELECT * FROM dispositivos WHERE id = ? AND userToken = ?";
    const response = await pool.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const addDevices = async (req, res) => {
  const { token } = req.params;
  const { id_device, id_recorrido, hora } = req.body;
  try {
    const addR = { id_device, id_recorrido, hora, userToken: token };
    const query = "INSERT INTO dispositivos SET ?";
    const response = pool.query(query, [addR]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const updateDeviesById = async (req, res) => {
  const { id, token } = req.params;
  const { id_recorrido, hora } = req.body;
  try {
    const updateD = { id_recorrido, hora };
    const query = "UPDATE dispositivos SET ? WHERE id = ? AND userToken = ?";
    const response = await pool.query(query, [updateD, id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const deleteDeviesById = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query = "DELETE FROM dispositivos WHERE id = ? AND userToken = ?";
    const response = await pool.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  selectDevices,
  selectDevicesById,
  addDevices,
  updateDeviesById,
  deleteDeviesById,
};
