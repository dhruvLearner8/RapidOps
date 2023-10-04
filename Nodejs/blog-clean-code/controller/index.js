
const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRound = 10;


const makeRegisterController = require("./register");
const registerController = makeRegisterController(jwt,path,bcrypt,saltRound);

const makeLoginController = require("./login");

module.exports={
    registerController,
    makeLoginController,
}