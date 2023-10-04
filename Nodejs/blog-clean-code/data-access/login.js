
function makeLoginQuery(mysql,TABLE_NAME,connectBlogDatabase){
    return({
        LoginQuery
    });

    async function LoginQuery(email){
        return new Promise((resolve,reject)=>{
            connectBlogDatabase.query(`select * from ${TABLE_NAME} where email = '${email}';`,(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

module.exports = makeLoginQuery;