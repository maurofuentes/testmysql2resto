const platosRepository = require("../models/Plato");
const db = require('../config/db');

exports.getPlatos = (req, res) => {
 
    // execute will internally call prepare and query
    db.connection.execute("SELECT * f platos", function (err, results, fields) {
      if(err){
        console.log(err);

        return res.status(500).json({msg: "error al ejecutar la consulta"});
      }
      console.log(results);
      res.status(200).json(results);
      // console.log(fields);
    });

  // res.status(200).json(platosRepository.plato);
};

exports.getPlato = (req, res) => {
  
  const id = req.params.id;
  
  // execute will internally call prepare and query
  db.connection.execute(
    "SELECT * FROM platos WHERE plato_id = ?",
    [id],
    function (err, results, fields) {
      
      if(err){
        return res.status(500).json({msg: "error al ejecutar la consulta"});
      }

      if(results.length === 0){
        return res.status(404).json({msg: "no se encontró el plato indicado"});
      }
      console.log(results);

      res.status(200).json(results[0]);
    }
  );
  
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
