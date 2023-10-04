module.exports = function makeUpdateUserAction({ user, Joi }) {
  return async function updateUserAction({ id, updateUserData }) {
    try {
      const newUpdateUserData = validateMyInputData({ updateUserData, Joi });
      if(Object.keys(newUpdateUserData).length==0){
        throw new Error("value must be type of object");
      }

      const newValidatedId = validateMyId({ id, Joi });

      const userData = await user({ newValidatedId, newUpdateUserData });
      
      if (userData[0].affectedRows === 0) {
        throw new Error("User Data Not Found");
      }
    } catch (err) {
      throw err;
    }
  };
};

//function for user data validation
function validateMyInputData({ updateUserData, Joi }) {
  const userDataValidation = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
  });
  const { error, value } = userDataValidation.validate(updateUserData);
  if (error) {
    throw error.details[0].message;
  }

  return value;
}

//user Id Validation
function validateMyId({ id, Joi }) {
  const validateUserId = Joi.number().integer().positive().required();
  const { error, value } = validateUserId.validate(id);
  if (error) {
    throw error.details[0].message;
  }
  return value;
}
