

function makeGoogleQuery({mysql,connectDB,tableName,uuidv4}){
    return({
        insertUser,
        checkUser,
        registerUser,
        findUserByUsername
    });
    async function insertUser(id,username){
        try{
            return new Promise((resolve,reject)=>{
                
                const random_id = uuidv4();
                connectDB.query(`insert into ${tableName} (id,social_id,username) values('${random_id}','${id}','${username}');`,(err,result)=>{
                    if(err){
                        reject(err);
                    }
                   
                    resolve(result);
                })
            })
           
        }catch(e){
            console.log(e);
            throw e;
        }
       
    }
    async function checkUser(id){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`select * from ${tableName} where id = '${id}';`,(err,result)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                })
            })
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function registerUser({random_id,username,password}){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`insert into ${tableName} (id,username,password) values('${random_id}','${username}','${password}');`,(err,result)=>{
                    if(err){
                        reject({"message":"Error","Error":err});
                    }
                    resolve({"message":"success"});
                })
            })
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
    async function findUserByUsername(username){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`select * from ${tableName} where username = '${username}' and social_id is NULL;`,(err,result)=>{
                    if(err){
                        console.log(err);
                        reject({"message":"error","error":err})
                    }
                    
                    resolve(result);
                })
            })
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeGoogleQuery;