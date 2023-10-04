const http = require("http");


// const queryString = require("query-string");

http.createServer( async (req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});

    const url = req.url;
    console.log(req.method);
    if(url === "/allStudents"){
        if(req.method === "GET"){
          //  const students = await query.getAllStudents();
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("hello guys docker is running");
          //  res.write(JSON.stringify(students));
            res.end();
        }
        // else if(req.method === 'POST'){
        //     let body = '';
        //     req.on('data',async chunk=>{
        //         body = body + chunk.toString();
        //         const data = JSON.parse(body);
               
        //         const id = data.id;
                
        //         const name = data.name;
        //         console.log(id,name);
        //         const result = await query.addStudent(id,name);
        //         if(result === "Success"){
        //             res.end("Success");
        //         }
        //         else{
        //             res.end("Error");
        //         }
        //     });
        // }
    }
    
    
}).
    listen(3000,()=>{
    console.log("Listening on port 3000");
})