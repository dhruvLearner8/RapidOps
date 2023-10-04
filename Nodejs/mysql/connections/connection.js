const mysql = require('mysql2');

const connectMySql = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'dhruv',
    password : 'dhruv',
    database : 'students'
  }); 


connectMySql.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
        console.log('Connected to MySQL!');
    
});


module.exports = { connectMySql };