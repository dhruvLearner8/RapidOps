function makePostLoginAction({postLogin,generateJWT}){
    return async function postLoginAction(req,res){
        const username = req.body.username;
        const password = req.body.password;
        const database = req.cookies.database;
        
        const result = await postLogin(username,password,database);
            
        if(result.statusCode == 200){
            const token = await generateJWT(result.user);
            
            res.cookie("access_token", token, {
                maxAge: 900000,
                httpOnly: true,   
                })
                .status(200);
            res.redirect('/profile');
            return;
        }

        res.send(result);
        return;
        
         
    }
}

module.exports = makePostLoginAction;