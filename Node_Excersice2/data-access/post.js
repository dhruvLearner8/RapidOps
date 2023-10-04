
function makePostQuery({connectDB,mysql}){``
    return Object.freeze({
        getAllPostQuery,
        insertPost,
        getPostById,
        updatePostById,
        deletePostById
    });

    async function getAllPostQuery(){
        try{
        
        return new Promise((resolve,reject)=>{
            connectDB.query(`select * from post;`,(err,result)=>{
                        if(err){
                            console.log(err);
                            resolve(err);
                        }
                       
                        resolve(result);
                    })
        })
            
        } catch(e){
            console.log(e);
            throw e
        }
        
    }
    async function insertPost(firstName,lastName){
        try{
            return new Promise((resolve,reject)=>{
                connectDB.query(`insert into post (first_name,last_name) value('${firstName}','${lastName}');`,(err,result)=>{
                    if(err){
                        reject({"message":"error",err:err});
                    }
                    resolve({"message":"success",result:result});
                })
            })
        } catch(e){
            console.log(e);
            throw e;
        }
    }
    async function getPostById(id){
    
        return new Promise((resolve,reject)=>{
            try{
                connectDB.query(`select * from post where id=${id};`,(err,result)=>{
                                if(err){
                                    reject({"message":"error",err:err});
                                }
                                resolve({"message":"success",result:result});
                            })
            }
            catch(e){
                console.log(e);
                throw e;
            }
        })
    }

  

    async function updatePostById({postId,firstName,lastName}){
       try{
        const result = connectDB.execute(`update post set first_name="${firstName}",last_name="${lastName}" where id=${postId};`);   
        return result;
       }
       catch(e){
            console.log(e);
            throw e;
       }
            
    }
    async function deletePostById(id){
        try{
            
            return new Promise ((resolve,reject)=>{

                connectDB.query(`delete from post where id=${id}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        reject({"message":"error",err:err});
                    }
                    console.log(result);
                    resolve({
                        "message":"success",result:result
                    });
                })
            })
        } catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makePostQuery;