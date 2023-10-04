const dataAccess = require("./../data-access");
const Joi = require("@hapi/joi");

const makeGetAllUser = require("./getAllUser");
const getAllUser = makeGetAllUser({ user: dataAccess.getAllUser });

const makeCreateUser = require("./createUser");
const createUser = makeCreateUser({ user: dataAccess.createUser, Joi });

const makeGetUser = require("./getUser");
const getUser = makeGetUser({ user: dataAccess.getUser,Joi });

const makeUpdateUser = require("./updateUser");
const updateUser = makeUpdateUser({ user: dataAccess.updateUser,Joi });

const makeDeleteUser = require("./deleteUser");
const deleteUser = makeDeleteUser({ user: dataAccess.deleteUser ,Joi});

module.exports = {
  getAllUser,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
