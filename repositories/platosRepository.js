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


exports.changePlatoPrice = (id, price) => {

    return new Promise(function ( resolve, reject ) {

        db.connection.execute("UPDATE platos SET precio = ? WHERE plato_id = ?",
        [price, id],
        function (err, results, fields) {
            if(err){
                console.log(err);
        
                reject("error al ejecutar la consulta");

            }
            console.log(results);
    
        });
            
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
         // resolve("el precio del plato se ha actualizado correctamente");
            

    });

}

exports.deleteDishById = (id) => {

    return new Promise(function ( resolve, reject ) {

        db.connection.execute("DELETE FROM `platos` WHERE plato_id = ?",
        [id],
        function (err, results, fields) {
            if(err){
                console.log(err);
        
                reject("error al ejecutar la consulta");

            }
            console.log(results);
    
        });

        db.connection.execute("SELECT * FROM platos",
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
