const {User}=require('../db')
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function userMiddleware(req,res,next){
     const firstname=req.headers.firstname
    const password=req.headers.password
   const user= User.findOne({
        firstname,
        password
    })
    .then(function(value){
      if (value) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            firstname:firstname,
            token: token
        })
        return;
    }
        else{
             res.status(403).json({
                msg:"user does not exist",
               
            })
            
        }
    })
}
module.exports=userMiddleware;