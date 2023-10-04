const {
  getAllUser,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("./../use-case");

const makeGetAllUserAction = require("./makeGetAllUser");
const getAllUserAction = makeGetAllUserAction({ getAllUser });

const makeCreateUserAction = require("./makeCreateUser");
const createUserAction = makeCreateUserAction({ createUser });

const makeGetUserAction = require("./makeGetUser");
const getUserAction = makeGetUserAction({ getUser });

const makeUpdateUserAction = require("./makeUpdateUser");
const updateUserAction = makeUpdateUserAction({ updateUser });

const makeDeleteUserAction = require("./makeDeleteUser");
const deleteUserAction = makeDeleteUserAction({ deleteUser });

module.exports = {
  getAllUserAction,
  createUserAction,
  getUserAction,
  updateUserAction,
  deleteUserAction,
};
