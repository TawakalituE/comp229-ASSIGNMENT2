/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Business Model
let Business = require('../models/business');

module.exports.displayBusinessList = async (req, res, next)=>{
    try {
        let businessList = await Business.find();
        //console.log(businessList);

        res.render('business/list', 
            {title: 'Businesss', 
            BusinessList: businessList,
            displayName: req.user ? req.user.displayName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.displayAddPage = async (req, res, next)=>{
    try {
        res.render('business/add', 
        {title: 'Add Business',
        displayName: req.user ? req.user.displayName : ''})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddPage = async (req, res, next) => {
    let newBusiness = new Business({
        "name": req.body.name,
        "email": req.body.email,
        "field": req.body.field,
        "description": req.body.description,
        "levy": req.body.levy
    });

    try {
        await newBusiness.save();
        res.redirect('/business-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayUpdatePage = async (req, res, next) => {
    let id = req.params.id;

    try {
        let businessToUpdate = await Business.findById(id);
        res.render('business/update', 
        {title: 'Update Business', 
        business: businessToUpdate,
        displayName: req.user ? req.user.displayName : ''});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processUpdatePage = async (req, res, next) => {
    let id = req.params.id;

    let updatedBusiness = {
        "name": req.body.name,
        "email": req.body.email,
        "field": req.body.field,
        "description": req.body.description,
        "levy": req.body.levy
    };

    try {
        await Business.updateOne({_id: id}, updatedBusiness);
        res.redirect('/business-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Business.findByIdAndRemove(id);
        res.redirect('/business-list');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};