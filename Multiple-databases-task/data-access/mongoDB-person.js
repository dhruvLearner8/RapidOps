function makeMongoDBquery({mongoose,Person,collectionName}){
    return ({
        findById,
        insertUser,
        findUserByUsername,
        insertUserRegister
    });
    async function findById(user_id){

        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/person');
            const person = await Person.find({id:user_id});
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
            await mongoose.connect('mongodb://127.0.0.1:27017/person');
            const newPerson = new Person({
                social_id: user_id,
                username: username,
                
              });
            await newPerson.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function insertUserRegister(username,password){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/person');
            const newPerson = new Person({
                
                username: username,
                password:password
                
              });
            await newPerson.save();
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function findUserByUsername(username){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/person');
            const user = await Person.find({
                username: username,
                social_id: null
              });
            return user;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
}

module.exports = makeMongoDBquery;