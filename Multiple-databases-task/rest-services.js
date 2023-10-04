const express = require("express");
const router = express.Router();
const controller = require("./controllers");

const authCheck = require("./middlewares/authCheck");
const passport = require("passport");

const passportSetup = require("./middlewares/passport-google-setup");
const githubPassportSetup = require("./middlewares/passport-github-setup")
const facebookPassportSetup = require("./middlewares/passport-facebook-setup");

router
    .get('/',controller.homeAction)
    .get('/register',controller.getRegisterAction)
    .post('/register',controller.postRegisterAction)
    .post('/login',controller.postLoginAction)
    .get('/chooseDatabase',controller.getChooseDatabaseAction)
    .post('/chooseDatabase',controller.postChooseDatabaseAction)
    
    .get('/auth/logout',controller.logoutAction)
    .get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }))
    .get('/auth/google/redirect',passport.authenticate('google',{ session: false }),
        controller.generateJWTAction)
    .get('/auth/github',passport.authenticate('github',{
        scope:['profile']
    }))
    .get('/auth/github/redirect',passport.authenticate('github',{session:false}),
        controller.generateJWTAction)
    .get('/auth/facebook',passport.authenticate('facebook',{
            scope:['public_profile']
    }))
    .get('/auth/facebook/redirect',passport.authenticate('facebook',{session:false}),
        controller.generateJWTAction)
    .get('/profile',authCheck,controller.profileAction)

module.exports = router;