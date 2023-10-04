const { Given, Then, When } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect;
const Joi = require("@hapi/joi");
const makeGetUserAction = require("./deleteUser");

const sandbox = sinon.createSandbox();

const userDb = {
  user: () => {},
};

const getUserDb = sandbox.stub(userDb, "user");
getUserDb.callsFake((args) => {
  expect(args).deep.equal({
    id: this.id,
  });
  if (args.id == "1") {
    throw "User get sucessfully";
  }
});

// first
Given('User Details id:{string} to get  successfull user', (id) => {
  this.id = id || undefined;
});

When('Try to get user with valid data', async () => {
  const getUserAction = makeGetUserAction({ Joi, user: getUserDb });

  try {
    this.result = await getUserAction({
      id: this.id,
    });
  } catch (e) {
    console.log(e);
    this.error = {
      message: e,
    };
  }
});

Then('It will get user with details: {string}', (message) => {
  expect(this.error).deep.equal({
    message,
  });
});

Then(
    'get user function call {int} while geting user successfully',
  (getUserCallCount) => {
    sinon.assert.callCount(getUserDb, getUserCallCount);
  }
);

