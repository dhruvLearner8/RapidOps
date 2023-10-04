const jwt = require('jsonwebtoken');
const keys = require("../config/keys");
const JWT_SECRET_KEY = keys.JWT.JWT_SECRET_KEY;
const { MySqlquery,mongoDBquery}= require("../data-access");

const { v4: uuidv4 } = require('uuid');

const makeGenerateJWT = require("./generateJWT");
const generateJWT = makeGenerateJWT({jwt,JWT_SECRET_KEY});

const makePostRegister = require("./postRegister");
const postRegister = makePostRegister({uuidv4,MySqlquery,mongoDBquery});

const makePostLogin = require("./postLogin");
const postLogin = makePostLogin({MySqlquery,mongoDBquery});



module.exports = {
    generateJWT,
    postRegister,
    postLogin
}