const express = require("express");
const app = express();

const router = require("./rest-services");
const passport = require("passport");

const cookieParser = require("cookie-parser");

const bodyParser = require('body-parser');
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());


app.use('/',router);


// app.listen(8000,'192.168.41.4');

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})



// put,patch,post ,upsut (v imp)

// rest-api 