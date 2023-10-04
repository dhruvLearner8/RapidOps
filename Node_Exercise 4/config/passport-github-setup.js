const passport = require("passport");
const GitHubStrategy = require("passport-github2")
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

passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "/auth/github/redirect"
  },
  async (accessToken, refreshToken, profile, done) =>{
    try{
        const person = await query.checkUser(profile.id);
        if(person.length>0){
            console.log("User already exist");
            done(null,person[0]);
            return;
        }
        const result = await query.insertUser(profile.id,profile.username);
        const personObject = {
            id:profile.id,
            username:profile.username
        }
        done(null,personObject)
    } catch(e){
        throw e;
    }
  }
));