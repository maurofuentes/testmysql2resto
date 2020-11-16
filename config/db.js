const mysql = require('mysql2');

require('dotenv').config();

const config = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME
}
 
// create the connection to database
exports.connection = mysql.createConnection(config);