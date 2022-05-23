require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('./db');
// custom 
const userRouter=require('./controllers/user-route');
const adminRouter= require('./controllers/admin-route')
const app = express();
app.use(express.json());
app.use(cors())

app.use('/user',userRouter);
app.use('/admin',adminRouter);

// use port 3000 unless there exists a preconfigured port process.env.PORT is for external environment like AWS,
var port = process.env.PORT || 8000;
app.listen(port,()=>{
   console.log("server is running" + port)
});
