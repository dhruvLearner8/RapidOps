function makeUpdatePostAction({updatePost}){
    return async function updatePostAction (req,res){

       try{
        const postId = req.params.id;
        const firstName = req.body.fname;
        const lastName = req.body.lname;

        const result = await updatePost({postId,firstName,lastName});
        if (result == "Error"){
            res.send("Error");
        }
        res.redirect("/post");
       }
       catch(e){
        next(e);
       // res.send(e);
       }
        
    }
}

module.exports = makeUpdatePostAction;