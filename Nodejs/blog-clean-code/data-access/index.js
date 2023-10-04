
const mysql = require("mysql2");
const TABLE_NAME = 'user';
const { connectBlogDatabase } = require("../connections/index");
const makeQuery  = require("./register");
const query = makeQuery(mysql,TABLE_NAME,connectBlogDatabase);
// const insertDatabaseEntry = makeQuery(email,hashedPassword);

const makeLoginQuery = require("./login");
const loginQuery = makeLoginQuery(mysql,TABLE_NAME,connectBlogDatabase);

module.exports = { 
    query,
    loginQuery
};