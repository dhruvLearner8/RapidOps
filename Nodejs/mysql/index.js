
const express = require("express");

const app = express();
app.use(express.json());

const studentRouter = require('./routes/user.js');
const databaseRouter = require('./routes/database.js');

app.use("/database",databaseRouter);
app.use("/students",studentRouter);


app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
});

