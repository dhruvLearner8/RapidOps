const express = require("express");
const app = express();

const router = require("./rest-services");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
const controller = require("./controllers")
const bodyParser = require('body-parser');
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.get('/chooseDatabase',controller.getChooseDatabaseAction);

app.use('/',router);


app.listen(8000,()=>{
    console.log("Listening on port 8000");
})



// put,patch,post ,upsut (v imp)

// rest-api 