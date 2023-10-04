function makeMongoDBquery({mongoose,Person,collectionName}){
    return ({
        findUserById,
        insertUser,
        findUserByEmail,
        insertUserRegister,
        getAllUsers,
        deleteUser,
        updateUser,
        findBySocialId,
    });
    async function findBySocialId(socialId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const user = await Person.find({social_id:socialId});
            return user;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function findUserById(userId){

        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const person = await Person.find({_id:userId});
            mongoose.connection.close();
            return person;

        }
        catch(e){
            console.log(e);
            throw e;
        }
    }

    async function insertUser(user_id,username){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const newPerson = new Person({
                social_id: user_id,
                username: username,
                role:"customer"
              });
            await newPerson.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function insertUserRegister({email,firstName,lastName,role,password1,dob}){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const newPerson = new Person({
                first_name:firstName,
                last_name:lastName,
                email:email,
                role:role,
                dob:dob,
                password:password1
                
              });
            await newPerson.save();
            mongoose.connection.close();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function findUserByEmail(email){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const user = await Person.find({
                email: email,
              });
            
            mongoose.connection.close();
            return user;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function getAllUsers(){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const users = await Person.find();
            mongoose.connection.close();
            return users;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function deleteUser(userId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const deletedUser = await Person.findByIdAndRemove(userId);
            
            mongoose.connection.close();
            return;
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }
    async function updateUser({userId,firstName,lastName,role,dob}){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const user =await Person.updateOne(
                { _id: userId }, // Replace with the actual document ID
                { $set: { first_name:firstName,last_name:lastName,role:role,dob:dob } }, // Specify the field and its new value
              );
            mongoose.connection.close();
           
            return;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeMongoDBquery;