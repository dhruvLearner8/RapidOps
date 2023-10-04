const { mongoDBquery } = require("../data-access");

function makePostRegister({uuidv4,MySqlquery}){
    return async function makePostRegister(username,password,database){
        try{
            if(database === "mysql"){
                const user = await MySqlquery.findUserByUsername(username);
                if(user.length >= 1){
                    return {
                        message : "Username already exist",
                        statusCode: 409
                    };
                }
                const random_id = uuidv4();
                const result =await MySqlquery.registerUser({random_id,username,password}); // left here
                return {
                    message:"success",
                    statusCode:201,
                };
            }
            if(database === "mongodb"){
               // const temp = await mongoDBquery.insertUserRegister(username,password);
                const user = await mongoDBquery.findUserByUsername(username);
                if(user.length >=1){
                    return {
                        message : "Username already exist",
                        statusCode: 409
                    };
                }
                await mongoDBquery.insertUserRegister(username,password);
                return {
                    message:"success",
                    statusCode:201,
                };
                
            }
            
        }catch(e){
            console.log(e);
            throw e;
            
        }
    }
}

module.exports = makePostRegister;