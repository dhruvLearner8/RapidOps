const { Given, Then, When } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect;
const Joi = require("@hapi/joi");
const makeUpdateUserAction = require("./updateUser");

const sandbox = sinon.createSandbox();

const userDb = {
  user: () => {},
};

const updateUserStub = sandbox.stub(userDb, "user");
updateUserStub.callsFake((args) => {
  expect(args).deep.equal({
    newValidatedId: args.newValidatedId,
    newUpdateUserData: args.newUpdateUserData,
  });
  throw "User updated sucessfully";
});

// first
Given(
  "User Details id:{string},updateUserData:{string} to update user",
  (id, updateUserData) => {
    (this.id = id || undefined),
      (this.updateUserData = updateUserData || undefined);
  }
);

When("Try to update user", async () => {
  const updateUserAction = makeUpdateUserAction({ Joi, user: updateUserStub });

  try {
    this.result = await updateUserAction({
      id: this.id,
      updateUserData: this.updateUserData,
    });
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

Then('It will throw error:"{string}" while update user', (message) => {
  expect(this.error).deep.equal({
    message,
  });
});

Then(
  "update user function call {int} while update user",
  (updateUserCallCount) => {
    sinon.assert.callCount(updateUserStub, updateUserCallCount);
  }
);

// second
Given(
  'User Details id:{string},updateUserData:"{string}" to update user successfull',
  (id, updateUserData) => {
    (this.id = id || undefined),
      (this.updateUserData = JSON.parse(updateUserData) || undefined);
  }
);

When("Try to update user with valid data", async () => {
  const updateUserAction = makeUpdateUserAction({ Joi, user: updateUserStub });

  try {
    this.result = await updateUserAction({
      id: this.id,
      updateUserData: this.updateUserData,
    });
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

Then("It will throw error:{string} while update valid user", (message) => {
  expect(this.error.message).deep.equal(message);
});

Then(
  "update user function call {int} while updating user successfully",
  (updateUserCallCount) => {
    sinon.assert.callCount(updateUserStub, updateUserCallCount);
  }
);
