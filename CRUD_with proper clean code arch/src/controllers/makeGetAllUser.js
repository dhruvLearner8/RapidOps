module.exports = function makeGetAllUserAction({ getAllUser }) {
  return async function getAllUserAction(req, res) {
    try {
      const userData = await getAllUser();
      res.status(200).json({
        status: "success",
        data: {
          message: userData,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        data: {
          message: err.message,
        },
      });
    }
  };
};
