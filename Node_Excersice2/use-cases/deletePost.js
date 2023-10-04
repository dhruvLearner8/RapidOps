function makeDeletePost({obj}){
    return async function deletePost(id){
        const result = await obj.deletePostById(id);

        
        if(result.message == "error"){
            return "Error";
        }
        return result.message;
    }
}

module.exports = makeDeletePost;