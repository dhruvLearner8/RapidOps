function makeHomeAction(){
    return function makeHomeAction(req,res){
        res.render('home');
    }
}

module.exports = makeHomeAction;