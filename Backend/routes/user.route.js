const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const {body} = require('express-validator');
const authMiddleware = require("../middlewares/auth.middleware")



router.post('/register',[
     body('fullname.firstname').isLength({min:3}).withMessage('First name should be atleast 3 characters long'),

     body('email').isEmail().withMessage('Email is invalid'),
     body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long'),
],userController.registerUser

);

router.post('/login', [
     body('email').isEmail().withMessage('Email is invalid'),
     body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long'),
],     userController.loginUser
);

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);

router.get('/logout',authMiddleware.authUser, userController.logoutUser);

module.exports = router;