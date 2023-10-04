function makePostRegisterAction({postRegister}){
    return async function postRegisterAction(req,res){
        try{
            const username = req.body.username;
           
            const password1 = req.body.password;
            const password2 = req.body.confirmPassword;
            if(password1 != password2){
                res.send("Password not matching");
                return;
            }
            const database = req.cookies.database;
            const result = await postRegister(username,password1,database);
            if(result.statusCode == 201){
                console.log(result);
                res.redirect('/');
            }
            res.send(result);
            
        }catch(e){
            console.log(e);
            throw e;
        }
        

    }
}

module.exports = makePostRegisterAction;