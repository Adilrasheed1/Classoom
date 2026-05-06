const mongoose=require("mongoose");
const { required } = require("zod/mini");
mongoose.connect("mongodb+srv://Adil:Adil123@cluster0.ldkvky8.mongodb.net/Paytm")
const userSchema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    password:String
})
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User=mongoose.model('User',userSchema);
module.exports={
    User,
    Account

}