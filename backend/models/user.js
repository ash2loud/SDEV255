
const Schema = mongoose.Schema;
const mongoose = require('mongoose');
// const db = require("../db");
// commented out because it doesn't seem to do anything

const UserSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String 
    }
}); 

const User = mongoose.model('User', UserSchema);
module.exports = User;