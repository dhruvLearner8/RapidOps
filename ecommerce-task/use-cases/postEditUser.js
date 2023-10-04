function makePostEditUser({mongoDBquery}){
    return async function postEditUser ({userId,firstName,lastName,role,dob}){
        await mongoDBquery.updateUser({userId,firstName,lastName,role,dob});
        return;
    }
}

module.exports = makePostEditUser;