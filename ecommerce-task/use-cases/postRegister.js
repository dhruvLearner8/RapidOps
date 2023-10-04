const { mongoDBquery } = require("../data-access");

function makePostRegister({uuidv4,MySqlquery}){
    return async function makePostRegister({email,firstName,lastName,role,password1,dob}){
        try{
            
            
               // const temp = await mongoDBquery.insertUserRegister({email,firstName,lastName,role,password1,dob});
                const user = await mongoDBquery.findUserByEmail(email);
               
                if(user.length >=1){
                    return {
                        message : "Username already exist",
                        statusCode: 409
                    };
                }
                const temp = await mongoDBquery.insertUserRegister({email,firstName,lastName,role,password1,dob});
                return {
                    message:"success",
                    statusCode:201,
                };
                
            
            
        }catch(e){
            console.log(e);
            throw e;
            
        }
    }
}

module.exports = makePostRegister;