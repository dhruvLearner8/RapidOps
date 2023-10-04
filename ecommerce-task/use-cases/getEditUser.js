function makeGetEditUser({mongoDBquery}){
    return async function getEditUser(userId){
        try{
            const user = await mongoDBquery.findUserById(userId);
            return user;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeGetEditUser;