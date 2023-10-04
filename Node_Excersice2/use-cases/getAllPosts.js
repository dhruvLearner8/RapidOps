

function makePostUseCase({obj}){
    return async function getAllPost(){
        try{
            const result = await obj.getAllPostQuery();
            
            return result;
        }
        catch(e){
            console.log(e);
            return e;
        }
    }
}

module.exports = makePostUseCase;