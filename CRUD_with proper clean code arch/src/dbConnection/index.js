const mysql = require("mysql2/promise");
// const dotenv = require("./../dotenv").config();

async function getDbConnection() {
  let db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cruddata",
  });
  return db;
}

module.exports = getDbConnection;
