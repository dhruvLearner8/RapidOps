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
            scope:[
                "public_profile",
                
            ]
    }))
    .get('/auth/facebook/redirect',passport.authenticate('facebook',{session:false}),
        controller.generateJWTAction)
    .get('/profile',authCheck,controller.profileAction)
    .get('/allUsers',authCheck,controller.getAllUserAction)
    .get('/editUser/:userId',authCheck,controller.getEditUserAction)
    .post('/editUser/:userId',authCheck,controller.postEditUserAction)
    .get('/deleteUser/:userId',authCheck,controller.deleteUserAction)
    .get('/allProducts',authCheck,controller.getAllProductsAction)
    .get('/addProduct',authCheck,controller.addProductAction)
    .post('/addProduct',authCheck,controller.postAddProductAction)
    .get('/editProduct/:productId',authCheck,controller.getEditProductAction)
    .post('/editProduct/:productId',authCheck,controller.postEditProductAction)
    .get('/deleteProduct/:productId',authCheck,controller.deleteProductAction)
    .get('/addToCart/:productId',authCheck,controller.addToCartAction)
    .get('/getCart',authCheck,controller.getCartAction);
    
   

module.exports = router;


// cockroach , make routes with nodejs (jobs and cronjob), kafka ,docker