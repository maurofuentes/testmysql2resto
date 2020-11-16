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

exports.addNewDish = async (req, res) => {

  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const categoria_id = req.body.categoria_id;

  try {

    const platos = await platosRepository.addNewDish(nombre, precio, categoria_id);

    res.status(200).json(platos);

    
  } catch (error) {
    
    return res.status(500).json({msg: "error al ejecutar la consulta"});
    
  }

}

exports.changePlatoPrice = async (req, res) => {
  const body = req.body;
  const id = body.id;
  const price = body.precio;

  console.log(body);
  
  try {
    
    const result = await platosRepository.changePlatoPrice(id, price);

    res.status(200).json(result[0]);

  } catch (error) {

    console.log(error);

    res.status(500).json({msg: "error"});
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

exports.deleteDishById = async (req, res) => {

  const id = req.params.id;
  
  try {

    const platos = await platosRepository.deleteDishById(id);

    res.status(200).json(platos);
    
  } catch (error) {

    res.status(403).json({ message: "El plato no se pudo borrar." });

  }

};
