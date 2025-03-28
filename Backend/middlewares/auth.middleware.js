const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.authUser = async(req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
     return res.status(401).json({message:"Uauthorized canoot have token"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token : token});
    if(isBlacklisted){
    return res.status(401).json({message:"Uauthorized acccess it is blacklisted"});
   
        }
   
    try{
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     const user =  await userModel.findById(decoded._id);
     req.user = user;
     return next();
    }catch{
        return res.status(401).json({message:"Uauthorized acccess of user"});
    }
}

module.exports.authCaptain = async(req,res,next) =>{

    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
     return res.status(401).json({message:"Uauthorized"});
    }
    const isBlacklisted = await blacklistTokenModel.findOne({token:token});
    if(isBlacklisted){
    return res.status(401).json({message:"Uauthorized acccess"});
    }
    try{
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     const captain =  await captainModel.findById(decoded._id);
     req.captain = captain;
     return next();
}catch(e){
    return res.status(401).json({message:"Uauthorized acccess"});
}
}