module.exports = function makeDeleteUserAction({ user, Joi }) {
  return async function deleteUserAction(id) {
    try {
      const validatedId = validateMyInputData({ id, Joi });

      const userData = await user(validatedId);

      if (userData[0].affectedRows === 0) {
        throw new Error("User Data Not Found");
      }
    } catch (err) {
      throw err;
    }
  };
};

//function for userid validation
function validateMyInputData({ id, Joi }) {
  const validateUserId = Joi.required();
  const { error, value } = validateUserId.validate(id);
  if (error) {
    throw error;
  }
  return value;
}
