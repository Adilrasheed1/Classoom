const express=require('express');
const {User,Account}=require('../db')
 const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const userMiddleware=require('../middlewares/user');
const { regex } = require('zod');
const router=express.Router();
router.post('/signup',async(req,res)=>{
    const username=req.body.username;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const password=req.body.password;
   const user=  await User.create({
        username,
        firstname,
        lastname,
        password
    })
    console.log(user)
   const userId = user._id;
   console.log(userId)

    await Account.create({
       userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        firstname:firstname,
        token: token
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
router.delete("/delete-many", async (req, res) => {
  try {
    const result = await User.deleteMany({
      firstname: req.body.firstname   // condition
    });
 res.json({
      message: "Deleted successfully",
      deletedCount: result.deletedCount
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports=router; 