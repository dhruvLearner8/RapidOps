function makeGetEditPost({obj}){
    return async function getEditPost(id){
        const post = await obj.getPostById(id);
       
        
        if(post.message == "error"){
            return "Error";
        }
        if(post.result.length===0){
            return "Id not found";
        }
        return post.result[0];
    }
}

module.exports = makeGetEditPost;