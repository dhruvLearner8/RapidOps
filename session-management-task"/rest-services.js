const express = require("express");
const router = express.Router();
const controller = require("./controllers");

const authCheck = require("./middlewares/authCheck");
const passport = require("passport");

const passportSetup = require("./config/passport-google-setup");
const githubPassportSetup = require("./config/passport-github-setup")
const facebookPassportSetup = require("./config/passport-facebook-setup");

router
    .get('/',controller.homeAction)
    .get('/auth/login',controller.loginAction)
    .get('/auth/logout',controller.logoutAction)
    .get('/auth/google',passport.authenticate('google',{
        scope:['profile']
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