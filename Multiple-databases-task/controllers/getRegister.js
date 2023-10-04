function makeGetRegisterAction(){
    return function getRegisterAction(req,res){
        res.render("register");
    }
}

module.exports = makeGetRegisterAction;