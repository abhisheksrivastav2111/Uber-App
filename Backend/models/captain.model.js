const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captianSchema = new mongoose.Schema({

fullname:{
     firstname: {type: String, required: true},
     lastname: {type: String, required: true},
},
email:{type:String, required: true,
     match:[/\S+@\S+\.\S+/, 'please enter the valid emial'],
     unique: true,lowercase: true},

     password:{
          type:String,
          required: true,
          select: false
     },
     soketId: {type: String},
     status:{
          type:String,
          enum:['active','inactive'],
          default:'inactive'
     },
     vehicle:{
          color:{
               type:String,
               required: true,
               minLength:[3, 'color must be at least 3 characters'],

          },
          plate:{
               type:String,
               required: true,
               minLength:[3, 'plate must be at least 3 characters']
          },
          capacity:{
               type:Number,
               required: true,
               minLength:[1, 'capacity must be at least 1']
          },
          vehicleType:{
               type:String,
               enum:['car','Auto','motorcycle'],
               required: true
          },
         

     },
     location:{
          lat:{
               type:Number,
               
          },
          lng:{
               type:Number,
             
          }
     }



});

captianSchema.methods.generateAuthToken = function(){
     const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
     return token;
}

captianSchema.methods.comparePassword = function(password){
     return bcrypt.compareSync(password, this.password);
}

captianSchema.statics.hashPassword = function(password){
     return bcrypt.hashSync(password, 10);
}


const captainModel = mongoose.model('captain', captianSchema);
module.exports = captainModel;