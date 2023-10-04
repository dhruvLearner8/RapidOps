function makeLoginAction(){
    return function loginAction(req,res){
        res.render('login');
    }
}

module.exports = makeLoginAction;