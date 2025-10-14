
const Schema = mongoose.Schema;
const mongoose = require('mongoose');
const db = require("../db");

const UserSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String 
    }
});

module.exports = User;

const User = mongoose.model('User', UserSchema);
module.exports = User;