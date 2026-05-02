import { InputCompo } from "../components/InputCompo";
import { User } from "../components/User";

export function UserDashboard(){
    return <div>
        <div className="flex justify-between bg-gray-300 h-20 pt-5 pl-2 pr-2">
            <h3>Payments App</h3>
            <a>hello, user</a>
        </div>
        <div className="mt-5 ml-5">
            <h2>Your Balance:$600</h2>
            
        </div>
        <div className="flex flex-col mt-5 ml-5">
           <InputCompo title='Users' placeholder="Search users..." className="h-10 w-150 mt-2 pl-2 border-1 border-gray-300 rounded-sm"/>

        </div>
    <div className="border-1 border-gray-300  rounded-sm mt-10 w-200 ml-5">
        <User/>
        <User/>
         <User/>
        <User/>
    </div>
    </div>
}