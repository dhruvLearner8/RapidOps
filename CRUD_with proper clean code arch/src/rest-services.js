const express = require("express");

const router = express.Router();
const userController = require("./controllers");

router
  .route("/")
  .get(userController.getAllUserAction)
  .post(userController.createUserAction);

router
  .route("/:id")
  .get(userController.getUserAction)
  .patch(userController.updateUserAction)
  .delete(userController.deleteUserAction);

module.exports = router;
