function makePostEditUserAction({postEditUser}){
    return async function postEditUserAction(req,res){
        const userId = req.params.userId;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const role = req.body.roles;
        const dob=req.body.dob;
        await postEditUser({userId,firstName,lastName,role,dob});
        res.redirect('/allUsers');
    }
}

module.exports = makePostEditUserAction;