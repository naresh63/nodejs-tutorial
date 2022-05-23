require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.LOCAL_DB)
.then(()=>console.log("connected to local db"))
.catch(err=>console.log(err))
