import { useNavigate } from "react-router-dom"

export function User({user}){
   const navigate=useNavigate() 
    return <div>
        <div className="flex flex-row justify-between w-180  ml-5 mt-2 mb-2  pl-3 rounded-sm border-1 border-gray-300 bg-gray-200">
            <span><h3>{user.firstname} {user.lastname}</h3></span>
            <button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname)}} className="bg-blue-400 w-20 rounded-md text-gray-200">Send Money</button>
        </div>
    </div>
}