function makeGetEditPostAction({getEditPost}){
    return async function getEditPostAction(req,res){
        const postId= req.params.id;
       
        const post = await getEditPost(postId);
        if(post === "Error"){
            res.render("error",{message:"Error"});
        }
        if(post === "Id not found"){
            res.render("error",{message:"Id not found"})
        }
        res.render("edit",{post:post})
    }
}

module.exports = makeGetEditPostAction;