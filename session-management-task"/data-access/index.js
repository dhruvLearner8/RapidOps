const {connectDB} = require("../connections");

const mysql = require("mysql2/promise");


const makeGoogleQuery = require("./person");
const tableName = 'person';
const query = makeGoogleQuery({mysql,connectDB,tableName})

module.exports = {
    query
}