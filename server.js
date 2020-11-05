const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos al servidor de la aplicacion geotab." });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`BackEnd en puerto: ${PORT}.`);
});