const platosRepository = require("../models/Plato");
const mysql = require("mysql2");

exports.getPlatos = (req, res) => {
  try {
    // create the connection to database
    const connection = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
    });

    console.log("conectado a DB");

    // execute will internally call prepare and query
    connection.execute("SELECT * FROM platos", function (err, results, fields) {
      console.log(results);
      res.status(200).json(results);
      // console.log(fields);
    });
  } catch (error) {
    console.log(error);
  }

  // res.status(200).json(platosRepository.plato);
};

exports.getPlato = (req, res) => {
  const body = req.body;
  const id = body.id;
  res.status(200).json(platosRepository.getPlato(id));
};

exports.changePlatoPrice = (req, res) => {
  const body = req.body;
  const id = body.id;
  //const id=body.new_price;
  const result = platosRepository.changePlatoPrice(id, new_price);
  if (result) {
    res
      .status(200)
      .json({ message: "El plato cambio de categoria correctamente." });
  } else {
    res.status(403).json({ message: "El plato no cambio de categoria." });
  }
};

exports.changePlatoCategory = (req, res) => {
  const body = req.body;
  const id = body.id;
  //const id=body.new_cat;
  const result = platosRepository.changePlatoCategory(id, new_cat);
  if (result) {
    res
      .status(200)
      .json({ message: "El plato cambio de categoria correctamente." });
  } else {
    res.status(403).json({ message: "El plato no cambio de categoria." });
  }
};

exports.deletePlato = (req, res) => {
  const body = req.body;
  const id = body.id;
  const result = platosRepository.deletePlato(id);
  if (result) {
    res.status(200).json({ message: "El plato fue borrado correctamente." });
  } else {
    res.status(403).json({ message: "El plato no se pudo borrar." });
  }
};
