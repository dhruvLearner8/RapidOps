const jwt = require('jsonwebtoken');
const { use } = require('../routes/register');


var checkAuthUser =  (req,res,next)=>{
    try{
        let token;
       
        const {authorization} = req.headers;
        if(authorization && authorization.startsWith('Bearer')){
            token = authorization.split(' ')[1];
            console.log(token);
            const userId = jwt.verify(token,process.env.JWT_SECRET_KEY).user_id;
           
            console.log(userId);

            req.user = userId;
           
        }
        else{
            req.user = null;
        }
        next();
    }
    catch(e){
        console.log("error",e);
        res.send(e);
    }
    
}

module.exports = {
    checkAuthUser
}