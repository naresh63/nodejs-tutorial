const mongoose = require('mongoose');


// local 
const DB_LOCAL="mongodb://localhost:27017/e-commerce"
mongoose.connect(DB_LOCAL)
.then(()=>console.log("connected to local db"))
.catch(err=>console.log(err))
