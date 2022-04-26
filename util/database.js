const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-compelete",
  password: "Anhk0biet",
});

module.exports = pool.promise();
