function makePostRegisterAction({postRegister}){
    return async function postRegisterAction(req,res){
        try{
            const email = req.body.email;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const password1 = req.body.password;
            const password2 = req.body.confirmPassword;
            const role = req.body.roles;
            const dob = req.body.dob;
            if(password1 != password2){
                res.send("Password not matching");
                return;
            }
           
            const result = await postRegister({email,firstName,lastName,role,password1,dob});
            if(req.cookies.access_token)
            {
                res.redirect('/allUsers');
                return;
            }
            if(result.statusCode == 201){
                
                res.redirect('/');
                return;
            }
            res.send(result);
            
        }catch(e){
            console.log(e);
            throw e;
        }
        

    }
}

module.exports = makePostRegisterAction;