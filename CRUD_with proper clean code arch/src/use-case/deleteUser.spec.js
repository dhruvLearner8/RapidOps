const { Given, Then, When } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect;
const Joi = require("@hapi/joi");
const makeDeleteUserAction = require("./deleteUser");

const sandbox = sinon.createSandbox();

const userDb = {
  user: () => {},
};

const deleteUserDb = sandbox.stub(userDb, "user");
deleteUserDb.callsFake((args) => {
  expect(args).deep.equal({
    id: this.id,
  });
  if (args.id == "1") {
    throw "User deleted sucessfully";
  }
});

// first
Given("User Details id:{string} to create new successfull user", (id) => {
  this.id = id || undefined;
});

When("Try to delete user with valid data", async () => {
  const deleteUserAction = makeDeleteUserAction({ Joi, user: deleteUserDb });

  try {
    this.result = await deleteUserAction({
      id: this.id,
    });
  } catch (e) {
    console.log(e);
    this.error = {
      message: e,
    };
  }
});

Then("It will delete user with details: {string}", (message) => {
  expect(this.error).deep.equal({
    message,
  });
});

Then(
  "delete user function call {int} while deleting user successfully",
  (deleteCallCount) => {
    sinon.assert.callCount(deleteUserDb, deleteCallCount);
  }
);

