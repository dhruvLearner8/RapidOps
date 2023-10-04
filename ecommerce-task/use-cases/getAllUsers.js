function makeGetAllUsers({mongoDBquery}){
    return async function getAllUsers(){
        try{
            const result = await mongoDBquery.getAllUsers();
           
            return result;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}
module.exports = makeGetAllUsers;