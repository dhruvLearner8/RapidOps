function makeHomeControllerAction(){
    return function homeControllerAction(req,res){
        res.render('home');
    
    }
}

module.exports = makeHomeControllerAction;