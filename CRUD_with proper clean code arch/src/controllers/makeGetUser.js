module.exports = function makeGetUserAction({ getUser }) {
  return async function getUserAction(req, res) {
    try {
      const id = +req.params.id;
      const userData = await getUser(id);
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
          message: err.message
        },
      });
    }
  };
};
