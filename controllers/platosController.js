const platosRepository = require('../repositories/platosRepository');

exports.getPlatos = async (req, res) => {
 
  try {
    const platos = await platosRepository.getAll();
    
    res.status(200).json(platos);

  } catch (error) {
    res.status(500).json({msg: error});
  }

};

exports.getPlato = async (req, res) => {
  
  const id = req.params.id;
  
  try {
    
    const plato = await platosRepository.getDishById(id);

    if(plato.length === 0){
      return res.status(404).json({msg: "no se encontró el plato indicado"});
    }

    res.status(200).json(plato[0]);
    
  } catch (error) {
    
    return res.status(500).json({msg: "error al ejecutar la consulta"});

  }
  
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
