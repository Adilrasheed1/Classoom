const express=require("express");
const cors = require("cors");


const bodyParser=require("body-parser");
const app=express();
app.use(cors());
app.use(express.json()); 
const userRouter=require("./routes/user");
const accountRouter=require("./routes/account")

app.use(bodyParser.json());

app.use("/user",userRouter);
app.use("/account",accountRouter);
const port=3001;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
   
})