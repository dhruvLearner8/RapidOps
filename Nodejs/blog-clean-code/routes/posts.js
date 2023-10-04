const express = require("express");
const postRouter = express.Router();

const { makePostController } = require("../controller");

postRouter.use("/",makePostController);
