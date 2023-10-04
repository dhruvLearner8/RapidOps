function makeGenerateJWT({jwt,JWT_SECRET_KEY}){
    return async function generateJWT(userID){
        
        const token = jwt.sign({user_id :userID },JWT_SECRET_KEY,{expiresIn:'20m'});
       
        return token;
        
    }
}

module.exports = makeGenerateJWT;