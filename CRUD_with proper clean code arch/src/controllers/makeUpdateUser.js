module.exports = function makeUpdateUserAction({ updateUser }) {
  return async function updateUserAction(req, res) {
    try {
      const id = req.params.id;

      const updateUserData = req.body;

      await updateUser({ id, updateUserData });

      res.status(200).json({
        status: "success",
        data: {
          message: `User data Updated successfully on id ${id}....`,
          updatedData: updateUserData,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        data: {
          error:err.message
        },
      });
    }
  };
};
