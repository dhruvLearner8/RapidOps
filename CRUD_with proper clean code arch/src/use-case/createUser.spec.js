const { Given, Then, When } = require("cucumber");
const sinon = require("sinon");
const expect = require("chai").expect;
const Joi = require("@hapi/joi");
const makeCreateUserAction = require("./createUser");

const sandbox = sinon.createSandbox();

const userDb = {
  user: () => {},
};

const createUserStub = sandbox.stub(userDb, "user");
createUserStub.callsFake((args) => {
  expect(args).deep.equal({
    userName: args.userName,
    userEmail: args.userEmail,
  });
  if (args.userName=="savan") {
    throw 'User created sucessfully';
  }
});

// first
Given(
  "User Details name:{string},email:{string} to create new user",
  (name, email) => {
    (this.name = name || undefined), (this.email = email || undefined);
  }
);

When("Try to create new user", async () => {
  const createUserAction = makeCreateUserAction({ Joi, user: createUserStub });

  try {
    this.result = await createUserAction({
      name: this.name,
      email: this.email,
    });
  } catch (e) {
    console.log(e);
    this.error = {
      message: e,
    };
  }
});

Then('It will throw error:"{string}" while cretating user', (message) => {
  expect(this.error).deep.equal({
    message,
  });
});

Then("create user function call {int} while creating user", (userCallCount) => {
    sinon.assert.callCount(createUserStub, userCallCount);
  });

// second
Given(
  "User Details name:{string},email:{string} to create new successfull user",
  (name, email) => {
    (this.name = name || undefined), (this.email = email || undefined);
  }
);

When("Try to create new user with valid data", async () => {
  const createUserAction = makeCreateUserAction({ Joi, user: createUserStub });

  try {
    this.result = await createUserAction({
      name: this.name,
      email: this.email,
    });
  } catch (e) {
    this.error = {
      message: e,
    };
  }
});

Then("It will create new user with details: {string}", (message) => {
  expect(this.error.message).deep.equal(message);
});

Then("create user function call {int} while creating user successfully", (userCallCount) => {
  sinon.assert.callCount(createUserStub, userCallCount);
});
