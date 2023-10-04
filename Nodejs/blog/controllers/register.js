const { connectBlogDatabase } = require('../connections/login');


const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRound = 10;


async function postRegisterPage(req,res){
    try{
        const emailId = req.body.email;
        const password = req.body.password;
        const confimPassword = req.body.confirm_password;
        if(password!=confimPassword){
            res.send("Password Not matching ");
            return;
        }
        let isUniqueEmail = await checkUniqueEmail(emailId);
        
        if(isUniqueEmail===true){
            res.send("Email ID already exist");
            return;
        }
        const hashedPasswords = await hashedPassword(password);
        connectBlogDatabase.query(`INSERT INTO user (email,password) VALUES('${emailId}','${hashedPasswords}');`,(err,result)=>{
            if(err){
                res.send(err);
                return;
            }
           
            connectBlogDatabase.query(`select id from user where email = '${emailId}'; `,(err1,result1)=>{
                if(err1){
                    res.send(err1);
                    return;
                }
                const token = jwt.sign({user_Id : result1[0].id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
                
                res.status(201).send({"status":"user registered","token":token});
            })
            // res.send("User registered succesfully!!");
        })
    } catch(e){
        res.send(e);
    }
}


function getRegisterPage(req,res){
    
    res.sendFile(path.join(__dirname, '..','views', 'register.html'));

}

async function hashedPassword(password){
    try{
        const hash1 = await bcrypt.hash(password,saltRound);
      
        return hash1;
    } catch(e){
        console.log(e);
    }
}


async function checkUniqueEmail(email) {
    return new Promise((resolve, reject) => {
        connectBlogDatabase.query(`SELECT * FROM user WHERE email = "${email}";`, (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            if (result.length >= 1) {
              
                resolve(true);
            } else {
               
                resolve(false);
            }
        });
    });
}

module.exports = {
    getRegisterPage,
    postRegisterPage,
}