const { query } = require("../data-access/index");


function makeRegisterUseCase(jwt,path,bcrypt,saltRound){
    return async function registerUseCase(email,password,confirm_password){
        if(password!=confirm_password){
            return "Password Not Matching!!";
        }
        const isEmailExist = await checkEmail(email);
        if(isEmailExist === true){
            return "Email Alreay exist";
        }
        if(isEmailExist === false){
            const hashedPassword = await hashPassword(password);
            console.log(hashedPassword);
            const result = await addUserEntry(email,hashedPassword);
            return result;

        }
        return isEmailExist;
    }
    async function checkEmail(email){
            try{
               
                const message = await query.findEmail(email);
                console.log("in check email ",message);
                if (Array.isArray(message)){
                    if(message.length>=1){
                        return true;
                    }
                    return false;
                }
                return message
                

            }   catch(e){
                return e.toString();
            }
            
        }

    async function hashPassword(password){
        try{
            const hash1 = await bcrypt.hash(password,saltRound);
            return hash1;
        } catch(e){
            console.log(e);
        }
    }

    async function addUserEntry(email,hashedPassword){
        try{
            const result = await query.insertDatabaseEntry(email,hashedPassword);
            console.log(result);
            return result;

        } catch(e){
            console.log(e);
            return e;
        }
    }
}

module.exports = makeRegisterUseCase;



// async function registerUseCase (email,password,confirm_password){
//     if(password!=confirm_password){
//         return "Password Not Matching!!";
//     }

//     const isEmailExist = await checkEmail(email);
// }

// async function checkEmail(email){
//     try{
//         return new Promise((resolve,reject)=>{
//             const message = makeQuery.findEmail(email);
//             console.log(message);
//             resolve(message);

//         })
//     }   catch(e){
//         return e.toString();
//     }
    
// }

// module.exports = registerUseCase;