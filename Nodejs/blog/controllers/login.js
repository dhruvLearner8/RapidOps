const { connectBlogDatabase } = require('../connections/login');

const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRound = 10;

function getLoginPage(req,res){
    res.sendFile(path.join(__dirname,'..','views','login.html'));
}

async function postLoginPage(req,res){
    const emailId= req.body.email;
    const password = req.body.password;

    let isAuthenticatedUser = await checkCredentials(emailId,password);
    console.log(isAuthenticatedUser)
    if(isAuthenticatedUser === true)
    {
        let userId = await getUserId(emailId);
        
        const token = jwt.sign({user_id :userId },process.env.JWT_SECRET_KEY,{expiresIn:'30m'});
        res.send({"message":"login succesfull","token":token});
        return;
    }
    else{
        res.send(isAuthenticatedUser);
        return;
    }
}

async function checkCredentials(emailId,password){
    try{
        return new Promise((resolve,reject)=>{
            connectBlogDatabase.query(`select * from user where email = '${emailId}'`,async (err,result)=>{
                if(err){
                    reject(false);
                    return;
                }
                 
                if(result.length>0){
                    const match = await bcrypt.compare(password , result[0].password);
                    if(match){

                        resolve(true);
                    }
                    else{
                        resolve("Password Not matching");
                    }
                }
                resolve("Email not found");
            })
        } )
    } catch(e){
        res.send(e);
    }
}

async function getUserId(email){
    return new Promise((resolve,reject)=>{
        connectBlogDatabase.query(`select id from user where email = '${email}';`,(err,result)=>{
            if(err){
                reject(err);
                
            }
            const id = result[0].id;
            resolve(id);
        })
    })
}

module.exports = {
    getLoginPage,
    postLoginPage
}