
function makePostController({getAllPost}){
    return async function getAllPostController(req,res){
        const posts = await getAllPost();
        res.render("home",{posts:posts})
       // res.send(posts);
    }
}

module.exports = makePostController;