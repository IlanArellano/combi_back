const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./database");

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.use("/api/recorridos", require("./routes/recorrido.routes"));
app.use("/api/rutas", require("./routes/rutas.routes"));
app.use("/api/devices", require("./routes/devices.routes"));
app.use("/api/tipos", require("./routes/tipo.routes"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
