const jwt = require('jsonwebtoken');
//-----custom middleware for token verification-----
function verifytoken(req,res,next){
    if(req.headers.authorization !=undefined){
       let token= req.headers.authorization.split(" ")[1];
       // userCred is return any user if required
       jwt.verify(token,"secretkey",(err,userCred)=>{
          if(err===null){
                next();            
          }else{
             res.status(401).send({ message: "invalid token"})      
          }
       })
    }else{
       res.status(403).send({ message:"please authenticate"})
    }
 }
 module.exports= verifytoken;
