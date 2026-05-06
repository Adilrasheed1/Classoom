
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { Balance } from "../components/Balance";
import { InputCompo } from "../components/InputCompo";
import { User } from "../components/User";
import { useEffect, useState } from "react";
import ThemeTogglerButtonDemo from "./ThemeTogglerButton";


export function UserDashboard(){
    const [firstname,setFirstname]=useState("");
    const [balance ,setBalance]=useState(0)
    useEffect(()=>{
    const name=localStorage.getItem('firstname')
  
      fetch('http://localhost:3001/account/balance',{
         method: "GET",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }
      })
   .then(res=>res.json())
   .then(data=>{
    console.log("data",JSON.stringify(data, null, 2))
    
    setBalance(data.balance)
     console.log(data.balance)}
    )
   // const firstname = name?.split(" ")[0];
    setFirstname(name || "")
  
    },[])
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
      useEffect(() => {
       fetch("http://localhost:3001/user/bulk?filter=" + filter)
        .then(res => res.json())
        
        .then(data => {
            console.log(data)
            setUsers(data.user);
            
        });
       
    }, [filter])
    
    
    console.log(firstname)

    return <div className="h-full bg-white dark:bg-black text-black dark:text-white">
        <div className="flex  bg-[#381932] h-20 pt-5 pl-2 pr-2 text-gray-200">
            <h3>Payments App</h3>
            
            <div className=" h-10 w-10 ml-250">
                 <ThemeTogglerButtonDemo/>

                 </div>

            <a>hello, {firstname}</a>
        </div>
        <div className="mt-5 ml-5">
           <Balance value={balance}/>
            
        </div>
        <div className="flex flex-col mt-5 ml-5">
           <InputCompo onChange={(e) => {
                setFilter(e.target.value)
            }} title='Users' placeholder="Search users..." className="h-10 text-purple-500 w-150 mt-2 pl-2 border-1 border-gray-300 rounded-sm"/>

        </div>
    <div className="border-1 border-gray-300  rounded-sm mt-10 w-200 ml-5">
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
    </div>
}