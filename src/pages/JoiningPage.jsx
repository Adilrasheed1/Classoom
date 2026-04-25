import { InputCompo } from "../components/InputCompo";

export function JoiningPage(){
    return <div className="h-100 w-100 bg-gray-200 ml-100 mt-40 rounded-sm border-1 border-gray-300 flex flex-col  ">
     <h3 className="pt-4  pl-30 text-2xl font-bold text-black">CodeClass</h3>
     <p className="pt-2  pl-10 text-lg text-gray-500  ">Join your collaborative coding classroom</p>
     <InputCompo class="pt-5 pl-4 font-semibold text-gray-500" className=" ml-4 pl-4 border-1 border-gray-300 rounded-sm h-10 w-80" title="Name*" placeholder="Enter your Name..."/>
      <InputCompo class="pt-5 pl-4 font-semibold text-gray-500" className=" ml-4 pl-4 border-1 border-gray-300 rounded-sm h-10 w-80" title="Class code*" placeholder="Enter your Class Code..."/>
      <button className="mt-4 h-10 w-80 ml-8 bg-blue-500 text-lg font-semibold text-gray-200">Join Class</button>
    </div>
}