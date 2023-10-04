const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const { MySqlquery, mongoDBquery } = require("../data-access");


const keys = require("../config/keys")


passport.use(new GoogleStrategy({
     // Your Credentials here.
     callbackURL: "/auth/google/redirect",
     clientID: keys.google.clientID,
     clientSecret: keys.google.clientSecret,
     passReqToCallback: true
},async (req,accessToken,refreshToken,profile,done)=>{
    try{
       
       
        let person;
       
        // mongodb operations
        person = await mongoDBquery.findBySocialId(profile.id)
        
        if(person.length>0){
            console.log("User already exist");
            done(null,person[0]);
            return;
        }
        const result = await mongoDBquery.insertUser(profile.id,profile.displayName)
        
        const personObject = await mongoDBquery.findBySocialId(profile.id);


        // const personObject = {
        //     id:profile.id,
        //     username:profile.displayName,
        //     role:"customer"
        // }
        done(null,personObject[0])
    } catch(e){
        throw e;
    }
   
})
)