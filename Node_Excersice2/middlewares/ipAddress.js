
function makeIpAddressMiddleware({fs}){
    return function ipAddressMiddleware(req,res,next){
        const message = `\n ${req.ip}`;
    
        fs.appendFile('./ipAddress.txt', message,(err) => {
        
            if (err) {
            console.log("error occured");
            }
       
        });
     
        next();
    }

    
}

module.exports = makeIpAddressMiddleware;