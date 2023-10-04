const mysql = require('mysql2');

const connectDatabase = mysql.createConnection({
    host :'localhost',
    port : 3306,
    user: 'dhruv',
    password : 'dhruv'
});

connectDatabase.connect((err)=>{
    if(err){
        console.log("Error while connecting to database");
        return;
    }
    console.log("Connected to database viewer");
});

module.exports = {connectDatabase}