function makePostChooseDatabaseAction(){
    return function postChooseDatabaseAction(req,res){
        const database = req.body.name;
        console.log(database);
        res.cookie("database",database,{
            maxAge: 900000,
            httpOnly: true,  
        })
        res.redirect('/');
    }
}

module.exports = makePostChooseDatabaseAction;