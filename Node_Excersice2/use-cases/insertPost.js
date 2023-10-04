function makeInsertPost({obj}){
    return async function insertPost(firstName,lastName){
        
        const result = await obj.insertPost(firstName,lastName)
       
        if(result.message == "error"){
            console.log("some error occured");
            return "Error";
        }
        return "Success";
        

    }
}


module.exports = makeInsertPost;