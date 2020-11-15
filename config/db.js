const mysql = require('mysql2');

require('dotenv').config();
 
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
});
 
// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM platos WHERE `nombre` = ? AND `precio` < ?',
  ['papas', 200],
  function(err, results, fields) {
    console.log(results); 
    console.log(fields);
  }
);