const mysql = require('mysql2');

const connectDB = mysql.createConnection({
    'host':'localhost',
    'port':3306,
    'user':'dhruv',
    'password':'dhruv',
    'database': 'Authentication'
});
try{
    connectDB.connect((err)=>{
        if(err){
            console.log("Error while connecting to database:",err);
            return;
        }
        console.log("Connect to database succesfully");
    });
}
catch(e){
    
    throw e;
}

module.exports = connectDB;