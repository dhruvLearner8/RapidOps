
function makePostLogin({MySqlquery,mongoDBquery}){
    return async function postLogin(username,password,database){
        try{
            if(database === "mysql"){
                const result = await MySqlquery.findUserByUsername(username);
                // when user does not exist
                if(result.length==0){
                    return {
                        message:"Unauthorized",
                        statusCode:401
                    }
                }
                // When password not matching
                if(result[0].password != password){
                    return {
                        message:"Password Not matching",
                        statusCode: 401
                    }
                }
                return{
                    message:"Login Succesful",
                    statusCode:200,
                    user: result[0]
                }
            }
            if(database === "mongodb"){
                const result = await mongoDBquery.findUserByUsername(username);
                console.log(result);
                if(result.length == 0){
                    return {
                        message:"Unauthorized",
                        statusCode:401
                    }
                }
                if(result[0].password != password){
                    return {
                        message:"Password Not matching",
                        statusCode: 401
                    } 
                }
                return{
                    message:"Login Succesful",
                    statusCode:200,
                    user: result[0]
                }
  
            }
            
            
        }catch(e){
            console.log(e);
            throw e;
            
        }
    }
}

module.exports = makePostLogin;