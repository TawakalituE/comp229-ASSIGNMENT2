/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessController = require('../controllers/business')

//helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}



//Get Router for the Business List page - READ Operation
router.get('/', businessController.displayBusinessList);

//Get Route for the Add page - CREATE Operation
router.get('/add', requireAuth, businessController.displayAddPage);

// Post Route for processing the Add page - CREATE Operation
router.post('/add', requireAuth, businessController.processAddPage);

//Get Route for displaying the Update page - UPDATE Operation
router.get('/update/:id', requireAuth, businessController.displayUpdatePage);

//Post Route for processing the Update page - UPDATE Operation
router.post('/update/:id', requireAuth, businessController.processUpdatePage);


// Get to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;