import { InputCompo } from "../components/InputCompo";
import { User } from "../components/User";
import { useEffect, useState } from "react";

export function UserDashboard(){
    const [firstname,setFirstname]=useState("");
    useEffect(()=>{
    const name=localStorage.getItem('firstname')
    const firstname = name?.split(" ")[0];
    setFirstname(firstname || "")
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
    

    return <div>
        <div className="flex justify-between bg-gray-300 h-20 pt-5 pl-2 pr-2">
            <h3>Payments App</h3>
            <a>hello, {firstname}</a>
        </div>
        <div className="mt-5 ml-5">
            <h2>Your Balance:$600</h2>
            
        </div>
        <div className="flex flex-col mt-5 ml-5">
           <InputCompo onChange={(e) => {
                setFilter(e.target.value)
            }} title='Users' placeholder="Search users..." className="h-10 w-150 mt-2 pl-2 border-1 border-gray-300 rounded-sm"/>

        </div>
    <div className="border-1 border-gray-300  rounded-sm mt-10 w-200 ml-5">
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
    </div>
}