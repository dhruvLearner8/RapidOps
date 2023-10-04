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
        const database = req.cookies.database;
        console.log(profile);
        let person;
        if(database === "mongodb"){
            // mongodb operations
           person = await mongoDBquery.findById(profile.id)
        }
        if(database === "mysql"){
            person = await MySqlquery.checkUser(profile.id);
        }
        
        
        if(person.length>0){
            console.log("User already exist");
            done(null,person[0]);
            return;
        }
        if(database === "mongodb"){
            const result = await mongoDBquery.insertUser(profile.id,profile.displayName)
        }

        if(database === "mysql"){
            const result = await MySqlquery.insertUser(profile.id,profile.displayName);
        }
        
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