const express = require("express");

const registerRouter = express.Router();

const { registerController }= require("../controller/index");



registerRouter.post('/',registerController);

module.exports = registerRouter;