const {loginQuery} = require("../data-access/index");

function makeLoginUseCase(jwt,bcrypt){
    
    return async function loginUseCase(email,password){
        const isEmail = await ifEmailExist(email,password);
        if(isEmail.res === true){
            // do everything here
            return isEmail;
        }
        return isEmail;
    }

    async function ifEmailExist(email,password){
        
        const message = await loginQuery.LoginQuery(email);
       
        if(Array.isArray(message)){
            if(message.length==0){
                return "Email Not found";
            }
            const match = await checkPassword(password,message[0].password);
            
            if(match === true){
                const token=  await assignJWTToken(message[0].id);
                return {res:true,token:token};
            }


            return "Password Incorrect";
        }
        return message;
    }

    async function checkPassword(password,hashedPassword){
        const match = await bcrypt.compare(password,hashedPassword);
        return match;
    }
    
    async function assignJWTToken(userId){
        console.log(process.env.JWT_SECRET_KEY)
        const token = jwt.sign({user_id :userId },process.env.JWT_SECRET_KEY,{expiresIn:'30m'});
      //  res.send({"message":"login succesfull","token":token});
        return token;
    }
}

module.exports = makeLoginUseCase;