const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const port = process.env.NODE_PORT || 4040;
const userRoutes = require("./routes/userRouters");
const platoRoutes = require("./routes/platoRouters");
const categoriaRoutes = require("./routes/categoryRouters");
// const mysql = require('mysql2');

// try {
//     // create the connection to database
//     const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME
//     });

//     console.log("conectado a DB");

// } catch (error) {
//     console.log("no se pudo conectar a DB");
// }

app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use("/platos", platoRoutes);

app.use("/categorias", categoriaRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
