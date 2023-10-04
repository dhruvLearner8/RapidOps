const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const { query } = require("../data-access");
const keys = require("./keys")

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
    callbackURL: "/auth/facebook/redirect"
  },
  async (accessToken, refreshToken, profile, done) =>{
    
    try{
      const person = await query.checkUser(profile.id);
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
  }
));