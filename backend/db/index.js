const mongoose=require("mongoose");
const { required } = require("zod/mini");
mongoose.connect("mongodb+srv://Adil:Adil123@cluster0.ldkvky8.mongodb.net/Paytm")
const userSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:20
    }
})
const User=mongoose.model('User',userSchema);
module.exports={
    User
}