const express = require('express');

const loginRouter = express.Router();

// const { makeLoginController } = require("../controller/index.js");
const { makeLoginController } = require("../controller/index");

loginRouter.post("/",makeLoginController().loginController);

module.exports = loginRouter;