const express=require('express');
const {User}=require('../db')
const userMiddleware=require('../middlewares/user');
const { regex } = require('zod');
const router=express.Router();
router.post('/signup',(req,res)=>{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const password=req.body.password;
    User.create({
        firstname,
        lastname,
        password
    })
    res.json({
    message: 'User created successfully',
     firstname:firstname
    
})

})
router.post('/signin',userMiddleware,(req,res)=>{
    res.json({
        msg:"user logged in"
    })
   
})
router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || ""
    const users=await User.find({
        $or:[{
            firstname:{
              "$regex":filter
            }
        },
        {
            lastname:{
                "$regex":filter
            }
        }]
    
    })
    res.json({
       user:users.map(user=>({
        firstname:user.firstname,
        lastname : user.lastname,
         _id:user._id
       }) 
    )})
})
module.exports=router; 