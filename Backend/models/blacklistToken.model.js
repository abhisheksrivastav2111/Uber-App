const mongoose = require('mongoose');
const blaclistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 //24 hour in seco
    }
});

module.exports = mongoose.model('BlacklistToken',blaclistTokenSchema);