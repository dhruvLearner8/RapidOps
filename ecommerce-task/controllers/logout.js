function makeLogoutAction(){
    return function logoutAction(req,res){
        res.clearCookie("access_token")
        .status(200);
    
        res.redirect('/');
    }
}

module.exports = makeLogoutAction;