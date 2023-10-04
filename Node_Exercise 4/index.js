const express = require("express");
const app = express();
const authRouter = require("./routes/auth-routes")
const profileRouter = require("./routes/profile-routes");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(cookieParser());

// app.use(cookieSession({
//     maxAge:24*60*60*1000,
//     keys:[keys.session.cookieKey]
// }));

app.use(passport.initialize());
// app.use(passport.session());

app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/auth',authRouter);
app.use('/profile',profileRouter);

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})



// put,patch,post ,upsut (v imp)

// rest-api 