
function makeLogsMiddleware({fs}){

  return function logsMiddleware(req,res,next){
    const timestamp = new Date().toLocaleString();
    const message = `\n ${timestamp} : ${req.url}`;
    
    fs.appendFile('./logs.txt', message,(err) => {
        
        if (err) {
          console.log("error occured");
        }
       
      });
     
    next();
  }
    
}

module.exports = makeLogsMiddleware;