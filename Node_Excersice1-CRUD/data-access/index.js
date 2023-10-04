
const  {connectDB}  = require("../connections")
const mysql = require("mysql2/promise");

const makePostQuery = require("./post");
const obj = makePostQuery({connectDB,mysql});

module.exports = {
    obj
}