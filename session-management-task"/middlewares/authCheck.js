const keys = require("../config/keys");
const JWT_SECRET_KEY = keys.JWT.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
function authCheck(req,res,next){

    const token = req.cookies.access_token;
    
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const user = jwt.verify(token,JWT_SECRET_KEY).user_id;
        req.user=user;
        next();
    } catch (e){
    
        if (e instanceof jwt.TokenExpiredError) {
            // Handle Token Expired Error
            return res.send("Token expired please login again");// Redirect to the /profile route
            }
        return res.sendStatus(403);
  }
}

module.exports = authCheck;