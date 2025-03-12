const express = require('express');
const captainController = require('../controllers/captain.controller');
const {body} = require('express-validator');
const router = express.Router();

router.post('/register', [
     body('email').isEmail().withMessage('Please enter a valid email address'),
      body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
      body('vehicle.color').isLength({min:3}).withMessage("color must be atleast 3 character"),
      body('vehicle.plate').isLength({min:3}).withMessage("plate number should be atleast 3 Character "),
      body('vehicle.capacity').isLength({min:1}).withMessage("plate number should be atleast 3 Character "),
     body('vehicle.vehicleType').isIn(['car','Auto','motorcycle']).withMessage('vehicle type must be car, Auto or motorcycle'),
     body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
], captainController.registerCaptain);

module.exports = router;
