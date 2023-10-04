
const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRound = 10;

const makeRegisterUseCase = require("./register");
const registerUseCase = makeRegisterUseCase(jwt,path,bcrypt,saltRound);

const makeLoginUseCase = require("./login");

const loginUseCase = makeLoginUseCase(jwt,bcrypt);

module.exports = {
    registerUseCase,
    loginUseCase,
}