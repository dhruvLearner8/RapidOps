const jwt = require('jsonwebtoken');
const keys = require("../config/keys");
const JWT_SECRET_KEY = keys.JWT.JWT_SECRET_KEY;

const makeGenerateJWT = require("./generateJWT");
const generateJWT = makeGenerateJWT({jwt,JWT_SECRET_KEY});

module.exports = {
    generateJWT
}