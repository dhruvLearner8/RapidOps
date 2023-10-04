
function makeInsertPostAction({insertPost}){
    return async function insertPostAction(req,res){
        
        const firstName = req.body.fname;
        const lastName = req.body.lname;
        
        const result = await insertPost(firstName,lastName);
        if(result == "Error"){
            res.send("Error");
        }
        res.redirect("/post")
    }
}

module.exports = makeInsertPostAction;

