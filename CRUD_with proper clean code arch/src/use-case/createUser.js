module.exports = function makeCreateUserAction({ user, Joi }) {
  return async function createUserAction({ name, email }) {
    try {
      const { name: userName, email: userEmail } = validateMyInputData({
        name,
        email,
        Joi,
      });
      const userData = await user({ userName, userEmail });

      if (userData[0].affectedRows === 1) {
        return "user data created successfully";
      } else {
        throw new Error("user data not created");
      }
    } catch (err) {
      throw err;
    }
  };
};

//user data validation
function validateMyInputData({ name, email, Joi }) {
  const userCreateDataValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  const { error, value } = userCreateDataValidation.validate({ name, email });

  if (error) {
    throw error.details[0].message;
  }
  return value;
}
