const {User}=require('../db')
function userMiddleware(req,res,next){
     const firstname=req.headers.firstname
    const password=req.headers.password
    User.findOne({
        firstname,
        password
    })
    .then(function(value){
        if(value){
           
            next();
        }
        else{
             res.status(403).json({
                msg:"user does not exist",
               
            })
            
        }
    })
}
module.exports=userMiddleware;