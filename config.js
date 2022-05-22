const mongoose = require('mongoose');

const DB_URL='mongodb+srv://nareshskystisproject1:EKzlDdsAxHni9nmu@cluster0.wqfpz.mongodb.net/Natours?retryWrites=true&w=majority'
// local 
const DB_LOCAL="mongodb://localhost:27017/e-commerce"
mongoose.connect(DB_LOCAL)
.then(()=>console.log("connected to local db"))
.catch(err=>console.log(err))
