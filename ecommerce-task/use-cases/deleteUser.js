function makeDeleteUser({mongoDBquery}){
    return async function(userId){
        try{
            const result = await mongoDBquery.deleteUser(userId);
            return;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeDeleteUser;