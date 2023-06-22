/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/


let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
    field: String,
    description: String,
    levy: Number
},
{
    collection:'businesss'

});

module.exports = mongoose.model('Business', businessModel);