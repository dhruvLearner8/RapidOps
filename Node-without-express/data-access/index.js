const {connectDB} = require("../connections");
const mysql = require("mysql2");

const makeQuery = require("./student_info");

const query = makeQuery({connectDB,mysql});

module.exports = query;