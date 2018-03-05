'use strict';

// import * as buffer from "buffer";

const express = require('express'),
    buffer = require('buffer'),
    fs = require('fs'),
    path = require('path'),
    expressJWT = require('jwt-express'),
    config = require(path.resolve('./config/config')),
    router = express.Router();

var ctrl = {};
fs.readdirSync(path.resolve('./controllers/AdminDashboard')).forEach(file =>{
    // console.log(file)
    var name = file.substr(0,file.indexOf('.'));
    ctrl[name] = require(path.resolve(`./controllers/AdminDashboard/${name}`));
    console.log(name);
});

// noinspection JSUnresolvedFunction
/*router.use(expressJWT({
    // secret: new buffer(config.secret).toString('base64')
    secret:new buffer(config.secret).toString('base64'),

}) .unless({
    path:[
        'AdminDashboard/CategoriesController'
    ]
}));*/


/** @namespace ctrl.CategoriesController */
router.post('/CreateCategories',ctrl.CategoriesController.CreateCategories);


module.exports = router ;