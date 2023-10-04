const express = require("express");

const router = express.Router();
const passportSetup = require("../config/passport-google-setup");
const githubPassportSetup = require("../config/passport-github-setup")
const facebookPassportSetup = require("../config/passport-facebook-setup");
const passport = require("passport");
const controller = require("../controllers")

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/logout',(req,res)=>{
    // logout
    res.clearCookie("access_token")
    .status(200);
    
    res.redirect('/');
});

// ------------------GOOGLE ROUTES-----------


router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google',{ session: false }),
controller.generateJWTAction)

// ----------------GITHUB ROUTES --------------

router.get('/github',passport.authenticate('github',{
    scope:['profile']
}));

router.get('/github/redirect',passport.authenticate('github',{session:false}),
controller.generateJWTAction);

// ----------------FACEBOOK ROUTES ------------
router.get('/facebook',passport.authenticate('facebook',{
    scope:['public_profile']
}));

router.get('/facebook/redirect',passport.authenticate('facebook',{session:false}),
controller.generateJWTAction)


module.exports = router;