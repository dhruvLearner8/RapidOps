function makeGetChooseDatabaseAction(){
    return function getChooseDatabaseAction(req,res){
        res.render('chooseDatabase');
    }
}

module.exports = makeGetChooseDatabaseAction;