const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}
async function getFare(pickup,destination){
     if(!pickup || !destination){
          throw new Error("pickup or destination is not defined");
     }

     const distanceTime = await mapService.getDistanceTime(pickup, destination);


     const baseFare = {
          auto: 25,
          car: 40,
          motocycle: 150
      };
  
      const perKmRate = {
          auto: 10,
          car: 20,
          motocycle: 8
      };
  
      const perMinuteRate = {
          auto: 2,
          car: 4,
          motocycle: 1.5
      };

      const fare = {
          auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
          car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
          motocycle: Math.round(baseFare.motocycle + ((distanceTime.distance.value / 1000) * perKmRate.motocycle) + ((distanceTime.duration.value / 60) * perMinuteRate.motocycle))
      };
  
      return fare;
}

module.exports.createRide = async ({
     user, pickup, destination, vehicleType
 }) => {
     if (!user || !pickup || !destination || !vehicleType) {
         throw new Error('All fields are required');
     }
 
     const fare = await getFare(pickup, destination);
 
 
 
     const ride = rideModel.create({
         user,
         pickup,
         destination,
         otp:getOtp(6),
       
         fare: fare[ vehicleType ]
     })
 
     return ride;
 }

