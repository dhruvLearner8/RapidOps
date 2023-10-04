function makeProfileAction(){
    return function profileAction(req,res){
        
        res.render("profile",{user:req.user});
    }
}

module.exports = makeProfileAction;