
function makeQuery(mysql,TABLE_NAME,connectBlogDatabase){
    return ({
        findEmail,
        insertDatabaseEntry
    });
    async function findEmail(email){
        try{
            console.log("inside find email");
            const output = await findEmail2(email); 
            console.log(output);  
            return output;
        }
        catch(e){
            console.log(e);
        }
        
    }
    async function findEmail2(email){
        return new Promise((resolve,reject)=>{
            connectBlogDatabase.query(`select * from user where email = "${email}"`,(err,result)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                }
                console.log("in findemail",result);
                resolve(result);
            })
        })
    }
    async function insertDatabaseEntry(email,hashedPassword){
        try{
            const result = await insertEntry(email,hashedPassword); 
            console.log(result);
            return result;
        } catch(e){
            console.log(e);
            return e;
        }
    }
    async function insertEntry(email,hashedPassword){
        return new Promise((resolve,reject)=>{
            connectBlogDatabase.query(`insert into user (email,password) values ("${email}","${hashedPassword}");`,(err,result)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                resolve("User succesfully added");
            })
        })
    }
}

module.exports = makeQuery;