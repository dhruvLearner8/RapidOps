function makeErrorHandlerMiddleware(){
    return function errorHandlerMiddleware(req,res,next){
        console.log(req);
    }
}

module.exports = makeErrorHandlerMiddleware;