const {connectDB,connectMongoDB} = require("../connections");
const {Person} = require("../models");

const mysql = require("mysql2/promise");
const { v4: uuidv4 } = require('uuid');
const mongoose = require("mongoose");

const tableName = 'users';
const makeGoogleQuery = require("./MySql-person");
const MySqlquery = makeGoogleQuery({mysql,connectDB,tableName,uuidv4})

const collectionName = 'people';
const makeMongoDBquery = require("./mongoDB-person");
const mongoDBquery = makeMongoDBquery({mongoose,Person,collectionName});


module.exports = {
    MySqlquery,
    mongoDBquery
}