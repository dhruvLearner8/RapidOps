function makeGetRegisterAction(){
    return function getRegisterAction(req,res){
       
        res.render("register",{cookie:req.cookies.access_token});
    }
}

module.exports = makeGetRegisterAction;