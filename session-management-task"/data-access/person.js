

function makeGoogleQuery({mysql,connectDB,tableName}){
    return({
        insertUser,
        checkUser
    });
    async function insertUser(id,username){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`insert into ${tableName} (id,username) values('${id}','${username}');`,(err,result)=>{
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
}

module.exports = makeGoogleQuery;