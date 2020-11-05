const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  //origin: "http://localhost:8080",
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: "GET, PUT"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos al servidor de la aplicacion geotab." });
});
require("./app/routers/geotab.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`BackEnd en puerto: ${PORT}.`);
});