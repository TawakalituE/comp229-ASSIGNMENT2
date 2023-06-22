/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({


    username:
    {
        type: String,
        default: "",
        trim: true,
        require: 'Username is required.'
    },
    email:
    {
        type: String,
        default: "",
        trim: true,
        require: 'Email Address is required.'
    },
    displayName:
    {
        type: String,
        default: "",
        trim: true,
        require: 'Display Name is required.'
    },
    created:
    {
        type: String,
        default: Date.now,
        
    },
    update:
    {
        type: String,
        default: Date.now,
    }
},
{
    collection: 'users'
}
);

// configure options for User Model
let options = ({missingPasswordError: 'wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);
