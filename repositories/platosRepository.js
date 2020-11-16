const db = require('../config/db');

exports.getAll = () => {

    return new Promise(function ( resolve, reject ) {

        db.connection.execute("SELECT * FROM platos", function (err, results, fields) {
            if(err){
                console.log(err);
        
                reject("error al ejecutar la consulta");

            }
            console.log(results);
    
            resolve(results);
    
        });

    });

}

exports.getDishById = (id) => {

    return new Promise(function ( resolve, reject ) {

        db.connection.execute("SELECT * FROM platos WHERE plato_id = ?",
        [id],
        function (err, results, fields) {
            if(err){
                console.log(err);
        
                reject("error al ejecutar la consulta");

            }
            console.log(results);
    
            resolve(results);
    
        });

    });

}
