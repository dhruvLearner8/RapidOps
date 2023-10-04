
function makePostLogin({MySqlquery,mongoDBquery}){
    return async function postLogin(email,password){
        try{
            
                const result = await mongoDBquery.findUserByEmail(email);
                
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
  
            
            
            
        }catch(e){
            console.log(e);
            throw e;
            
        }
    }
}

module.exports = makePostLogin;