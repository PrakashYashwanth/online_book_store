const mysql = require("mysql2/promise");

// Create a MySQL connection pool
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "yash1234",
  database: "online_book_store",
});

module.exports = connection;