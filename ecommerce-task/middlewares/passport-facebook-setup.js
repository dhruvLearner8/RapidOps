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
   
    passReqToCallback: true,
    
  },
  async (req,accessToken, refreshToken, profile, done) =>{
    
    try{
      console.log(profile);
     
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

     
      done(null,personObject[0])
  } catch(e){
      throw e;
  }
  }
));