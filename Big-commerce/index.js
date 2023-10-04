const express = require("express");
const app = express();

const router = require("./rest-services");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',router);

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})