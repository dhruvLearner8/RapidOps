const express = require("express");

const router = express.Router();
const passportSetup = require("../config/passport-google-setup");
const githubPassportSetup = require("../config/passport-github-setup")
const facebookPassportSetup = require("../config/passport-facebook-setup");
const passport = require("passport");


// ------------------GOOGLE ROUTES-----------

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile');
})

// ----------------GITHUB ROUTES --------------

router.get('/github',passport.authenticate('github',{
    scope:['profile']
}));

router.get('/github/redirect',passport.authenticate('github'),(req,res)=>{
    res.redirect('/profile');
})

// ----------------FACEBOOK ROUTES ------------
router.get('/facebook',passport.authenticate('facebook',{
    scope:['public_profile']
}));

router.get('/facebook/redirect',passport.authenticate('facebook'),(req,res)=>{
    res.redirect('/profile');
})


router.get('/logout',(req,res)=>{
    // logout
    req.logout();
    res.redirect("/");
    
});

module.exports = router;