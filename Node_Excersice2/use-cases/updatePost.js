function makeUpdatePost({obj}){
    return async function updatePost({postId,firstName,lastName}){
        try{
            const result = await obj.updatePostById({postId,firstName,lastName});
            console.log(result);
           
            if(result.message == "error"){
                return "Error";
            }
        return result.result;
        }
        catch(e){
            throw e;
        }

        
    }
}

module.exports = makeUpdatePost;