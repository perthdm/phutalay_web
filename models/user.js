const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
    },
    name:String,
    surname:String
});

const User = mongoose.model('user', userSchema, 'user')
module.exports = User;