const express = require("express");
const app = express();

const router = require("./rest-services");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(cookieParser());



app.use(passport.initialize());

app.use('/',router);


app.listen(8000,()=>{
    console.log("Listening on port 8000");
})



// put,patch,post ,upsut (v imp)

// rest-api 