const { connectBlogDatabase } = require("../connections/index");
const {registerUseCase} = require("../use-cases/index")


function makeRegisterController(jwt,path,bcrypt,saltRound){
    return async function registerController(req,res){
        try{
            const emailId = req.body.email;
            const password = req.body.password;
            const confirm_password = req.body.confirm_password;

            const message = await registerUseCase(emailId,password,confirm_password);
            console.log("in controller ",message);
            res.send(message);
        }
        catch(e){
            console.log(e);
            return e;
        }
    }
}



module.exports = makeRegisterController;