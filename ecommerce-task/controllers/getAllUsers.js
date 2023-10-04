function makeGetAllUsersAction({getAllUsers}){
    return async function getAllUsersAction(req,res){
        const result = await getAllUsers();
        
        
        res.render('allUsers',{result:result,role:req.user.role})
    }
}

module.exports = makeGetAllUsersAction;