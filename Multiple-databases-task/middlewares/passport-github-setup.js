const passport = require("passport");
const GitHubStrategy = require("passport-github2")
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

passport.use(new GitHubStrategy({
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret,
    callbackURL: "/auth/github/redirect",
    passReqToCallback: true
  },
  async (req,accessToken, refreshToken, profile, done) =>{
    try{
        const database = req.cookies.database;
        let person;
       // console.log(profile);
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
           
            const result = await mongoDBquery.insertUser(profile.id,profile.username)
        }

        if(database === "mysql"){
            const result = await MySqlquery.insertUser(profile.id,profile.username);
        }
        
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