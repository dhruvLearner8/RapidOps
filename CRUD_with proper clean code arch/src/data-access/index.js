const getDbConnection = require("./../dbConnection");

const {
  makeGetAllUser,
  makeCreateUser,
  makeGetUser,
  makeUpdateUser,
  makeDeleteUser,
} = require("./userData");

const getAllUser = makeGetAllUser({ getDbConnection });

const createUser = makeCreateUser({ getDbConnection });

const getUser = makeGetUser({ getDbConnection });

const updateUser = makeUpdateUser({ getDbConnection });

const deleteUser = makeDeleteUser({ getDbConnection });

module.exports = {
  getAllUser,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
