const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const { MySqlquery, mongoDBquery } = require("../data-access");
const keys = require("../config/keys")

passport.serializeUser((userId,done)=>{
    done(null,userId);
});

passport.deserializeUser(async (id,done)=>{
    const user = await query.checkUser(id);
    const userId= user[0].id;
    done(null,userId);
})

passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/auth/facebook/redirect",
   
    passReqToCallback: true
  },
  async (req,accessToken, refreshToken, profile, done) =>{
    
    try{
      console.log(profile);
      const database = req.cookies.database;
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
  }
));