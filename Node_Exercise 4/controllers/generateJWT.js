function makeGenerateJWTAction({generateJWT}){
    return async function generateJWTAction(req,res){
        const token = await generateJWT(req.user);
        
        res.cookie("access_token", token, {
            maxAge: 900000,
            httpOnly: true,   
    })
    .status(200);
    res.redirect('/profile');
    
       // res.redirect('/profile')
    }
}

module.exports = makeGenerateJWTAction;