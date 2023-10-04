function makePostControllerAction(){
    return({
        getAllPostController,
    });

    async function getAllPostController(req,res){
        const post = await getAllPostUseCase();
    }
}