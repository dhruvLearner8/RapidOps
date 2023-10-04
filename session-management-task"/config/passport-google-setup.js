const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const { query } = require("../data-access");

const keys = require("./keys")



passport.use(new GoogleStrategy({
     // Your Credentials here.
     callbackURL: "/auth/google/redirect",
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret
},async (accessToken,refreshToken,profile,done)=>{
    try{
        // here i want to get cookie value from req object but cannot access req object
        const person = await query.checkUser(profile.id);
        console.log(person);
        if(person.length>0){
            console.log("User already exist");
            done(null,person[0]);
            return;
        }
        const result = await query.insertUser(profile.id,profile.displayName);
        const personObject = {
            id:profile.id,
            username:profile.displayName
        }
        done(null,personObject)
    } catch(e){
        throw e;
    }
   
})
)