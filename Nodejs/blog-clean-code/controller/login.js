const {connectBlogDatabase} = require("../connections/index");
const {loginUseCase} = require("../use-cases/index")

function makeLoginController(){
    return({
        loginController,
    });

    async function loginController(req,res){
        try{
            console.log("inside login controller");
            const email = req.body.email;
            const password = req.body.password;
            const message = await loginUseCase(email,password);
            if(message.res===true){
                res.send({"message":"Login succesful","token":message.token})
                return;
            }
            res.send(message);
            return;
        }
        catch(e){
            console.log(e);
            res.send("Error in login controller ",e);
        }
        
    }
}

module.exports = makeLoginController;