const { connectDatabase } = require('../connections/database.js');

function handleGetAllDatabases (req,res){
    connectDatabase.query('SHOW DATABASES;',(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send(result);
    })
}

function handleCreateDatabase(req,res){
    connectDatabase.query(`CREATE DATABASE ${req.body.databaseName};`,(err,result)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send(`Database ${req.body.databaseName} created Successfully`);
    });
}

// function handleUseDatabase(req,res){
//     connectDatabase.query(`USE DATABASE ${req.body.databaseName};`,(err,result)=>{
//         if(err){
//             res.send(err);
//             return;
//         }
//         res.send(`Using database ${req.body.databaseName};`);
//         return req.body.databaseName;
//     })
// }

module.exports = {
    handleGetAllDatabases,
    handleCreateDatabase,
   // handleUseDatabase,
}