const express=require('express');
const {User}=require('../db')
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
module.exports=router;