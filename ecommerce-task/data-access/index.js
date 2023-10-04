const {connectDB,connectMongoDB} = require("../connections");
const {Person,Product,Cart} = require("../models");

const mysql = require("mysql2/promise");
const { v4: uuidv4 } = require('uuid');
const mongoose = require("mongoose");

// const tableName = 'users';
// const makeGoogleQuery = require("./MySql-person");
// const MySqlquery = makeGoogleQuery({mysql,connectDB,tableName,uuidv4})

const collectionName = 'people';
const makeMongoDBquery = require("./person");
const mongoDBquery = makeMongoDBquery({mongoose,Person,collectionName});

const makeProductsQuery = require("./products");
const productQuery = makeProductsQuery({mongoose,Product})

const makeCartQuery = require("./cart");
const cartQuery = makeCartQuery({mongoose,Cart,Product});

module.exports = { 
    mongoDBquery,
    productQuery,
    cartQuery
}
