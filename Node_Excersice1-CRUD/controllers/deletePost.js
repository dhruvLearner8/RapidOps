function makeDeletePostAction({deletePost}){
    return async function deletePostAction(req,res){
        console.log("inside delete");
        const postId = req.params.id;
        const result = await deletePost(postId);
        res.redirect("/post");
    }
}

module.exports = makeDeletePostAction;