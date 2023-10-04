const mysql = require('mysql2');

const connectBlogDatabase = mysql.createConnection({
    'host':'localhost',
    'port':3306,
    'user':'dhruv',
    'password':'dhruv',
    'database': 'blog'
});

connectBlogDatabase.connect((err)=>{
    if(err){
        console.log("Error while connecting to database:",err);
        return;
    }
    console.log("Connect to database succesfully");
});



module.exports = { connectBlogDatabase };