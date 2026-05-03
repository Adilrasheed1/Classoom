import React, { useState } from "react";
import { InputCompo } from "../components/InputCompo";
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
    const [firstname, setFirstname] =useState('')

    const [password,setPassword]=useState("")
    const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-500 via-pink-300 to-gray-500 p-6">
     
      <div className="
      h-100 
        bg-white/20 
        backdrop-blur-md 
        border border-white/30 
        rounded-xl 
        shadow-lg 
        p-8 
        max-w-sm 
        text-white
        
      ">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2><div className="flex flex-col">
         <InputCompo onChange={(function(e){
            setFirstname(e.target.value)
         })} title="Username" type="text" placeholder="enter your  username..." className=" px-4 py-2 mb-5
          bg-white/30 
          rounded-lg 
          hover:bg-white/40 
          transition" />
         
          <InputCompo onChange={(function(e){
            setPassword(e.target.value)
         })} title="Password" type="Password" placeholder="enter your password..." className=" px-4 py-2 mb-5
          bg-white/30 
          rounded-lg 
          hover:bg-white/40 
          transition"/></div>
        <button onClick={()=>{
            fetch('http://localhost:3001/user/signin',{
                method:"POST",
                 headers: {
           
                firstname,
                 password
      },
      
            })
            .then(async function(res){
                const data= await res.json();
                if(res.ok){
                    localStorage.setItem("firstname", data.firstname);
                    navigate('/userDashboard')
                    alert("signin successful")
                }
                else {
    alert(data.msg || "signin failed");
  }

            })
            .catch(err=>{
               alert("Server error"); 
            })
        }}

         className="
          px-4 py-2 
          bg-white/30 
          rounded-lg 
          hover:bg-pink-400 
          transition
        ">
          Signin
        </button>
      </div>
    </div>
  );
}