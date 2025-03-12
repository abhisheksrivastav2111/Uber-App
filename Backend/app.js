const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookiesParser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const connectToDb = require('./db/db');

connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiesParser());
app.get('/',(req,res) =>{
     res.send("Hello World");
});
app.use('/users',userRoute);

module.exports = app;
