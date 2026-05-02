const express=require('express');
const {User}=require('../db')
const userMiddleware=require('../middlewares/user')
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
    
})

})
router.post('/signin',userMiddleware,(req,res)=>{
    res.json({
        msg:"user logged in"
    })
   
})
module.exports=router; 