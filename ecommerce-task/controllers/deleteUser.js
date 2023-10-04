function makeDeleteProductAction({deleteUser}){
    return async function deleteProductAction(req,res){
        const userId = req.params.userId;
        const result =await deleteUser(userId);
        res.redirect('/allUsers');
    }
}

module.exports = makeDeleteProductAction;