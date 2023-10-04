function makeGetEditUserAction({getEditUser}){
    return async function getEditUserAction(req,res){
        try{
            const userId= req.params.userId;
            const user = await getEditUser(userId);
           
            res.render('edit',{user});
        }
        catch(e){
            console.log(e);
            throw e;
        }

    }
}

module.exports = makeGetEditUserAction;