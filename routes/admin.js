'use strict';

const express = require('express'),
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

    // console.log(name);
});

/*router.use(expressJWT({
    secret: new Buffer(config.secret).toString('base64')
}).unless({path: [
    '/AdminDashboard/CreateCategories'

    ]}));*/


/** @namespace ctrl.CategoriesController */
router.post('/CreateCategories',ctrl.CategoriesController.CreateCategories);
/** @namespace ctrl.AdminLoginController */
router.post('/AdminRegister',ctrl.AdminLoginController.AdminRegister);
router.post('/AdminLogin', ctrl.AdminLoginController.AdminLogin);
/** @namespace ctrl.TacController */
router.post('/TermAndCondition',ctrl.TacController.TermAndCondition);
/** @namespace ctrl.PrivacyController */
router.post('/PrivacyDet',ctrl.PrivacyController.PrivacyDet);
/** @namespace ctrl.UserController */
router.post('/userAdd',ctrl.UserController.userAdd);
/** @namespace ctrl.DisastersController */
router.post('/DisastersAdd', ctrl.DisastersController.DisastersAdd);
/** @namespace ctrl.FundraiserController */
router.post('/AddFundraiser',ctrl.FundraiserController.AddFundraiser);
router.post('/UserDelete',ctrl.UserController.UserDelete);
router.get('/getAdmin',ctrl.AdminLoginController.getAdmin);

module.exports = router ;
