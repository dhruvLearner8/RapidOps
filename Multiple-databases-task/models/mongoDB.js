const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const personSchema = new Schema({

    social_id:String,
    username: String,
    password: String,
});

const Person = model('Person',personSchema);
module.exports = Person;