const db = require("../database");

const selectRecorrido = async (req, res) => {
  const { token } = req.params;
  try {
    const query = "SELECT * FROM recorrido WHERE userToken = ?";

    const response = await db.query(query, [token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const selectRecorridoById = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query =
      "SELECT * FROM recorrido WHERE id_recorrido = ? AND userToken = ?";

    const response = await db.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const addRecorrido = async (req, res) => {
  const { token } = req.params;
  const {
    id_recorrido,
    nombre,
    posicion,
    id_geocerca_1,
    id_geocerca_2,
    minutos,
  } = req.body;
  try {
    const newRecorrido = {
      id_recorrido,
      nombre,
      posicion,
      id_geocerca_1,
      id_geocerca_2,
      minutos,
      userToken: token,
    };

    const query = `INSERT INTO recorrido SET ?`;

    const response = await db.query(query, [newRecorrido]);
    res.status(200).json(response);
  } catch (error) {
    res.json({ error });
  }
};

const deleteRecorrido = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query =
      "DELETE FROM recorrido WHERE id_recorrido = ? AND userToken = ?";

    const response = await db.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json({ error });
  }
};

const deleteRecorridoById = async (req, res) => {
  const { id, token } = req.params;
  try {
    const query = "DELETE FROM recorrido WHERE id = ? AND userToken = ?";

    const response = await db.query(query, [id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json({ error });
  }
};

const updateRecorrido = async (req, res) => {
  const { id, token } = req.params;
  const { id_recorrido, posicion, id_geocerca_1, id_geocerca_2, minutos } =
    req.body;
  const updateQuery = {
    id_recorrido,
    posicion,
    id_geocerca_1,
    id_geocerca_2,
    minutos,
  };
  try {
    const query = "UPDATE recorrido SET ? WHERE id = ? AND userToken = ?";
    const response = await db.query(query, [updateQuery, id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

const updateRecorridoGeneralByNombre = async (req, res) => {
  const { id, token } = req.params;
  const { nombre } = req.body;
  const updateQuery = {
    nombre,
  };
  try {
    const query =
      "UPDATE recorrido SET ? WHERE id_recorrido = ? AND userToken = ?";
    const response = await db.query(query, [updateQuery, id, token]);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  selectRecorrido,
  selectRecorridoById,
  addRecorrido,
  deleteRecorrido,
  deleteRecorridoById,
  updateRecorrido,
  updateRecorridoGeneralByNombre,
};
