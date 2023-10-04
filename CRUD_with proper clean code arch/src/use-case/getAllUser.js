module.exports = function makeGetAllUserAction({ user }) {
  return async function getAllUserAction() {
    try {
      const userData = await user();
      return userData;
    } catch (err) {
      throw err;
    }
  };
};
