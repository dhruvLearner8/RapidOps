module.exports = function makeCreateUserAction({ createUser}) {
  return async function createUserAction(req, res) {
    try {
      const {name,email} = req.body;
      const result=await createUser({name,email});
      res.status(201).json({
        status: "success",
        data: {
          message: result,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        data: {
          error:err
        },
      });
    }
  };
};

