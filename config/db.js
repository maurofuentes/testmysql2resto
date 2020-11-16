const mysql = require('mysql2');

require('dotenv').config();

const config = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
}
 
// create the connection to database
exports.connection = mysql.createConnection(config);
 
// execute will internally call prepare and query
// connection.execute(
//   'SELECT * FROM platos WHERE `nombre` = ? AND `precio` < ?',
//   ['papas', 200],
//   function(err, results, fields) {
//     console.log(results); 
//     console.log(fields);
//   }
// );