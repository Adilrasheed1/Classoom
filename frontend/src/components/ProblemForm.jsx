import { InputCompo } from "./InputCompo";

export function ProblemForm(){
    return <div>
   <div className="h-20 w-screen bg-gray-300 pl-70 pt-5  text-blue-500 text-2xl font-semibold "> Post new Problem</div>
   <div className="h-screen w-screen bg-slate-300">
   <div className="flex flex-col ml-50   ">
    <InputCompo class="pt-5"  title="Problem title"  placeholder="e.g Two Sum" className="h-15 w-150 mt-2 pl-4 rounded-sm border-1 border-gray-400 bg-gray-200"/>
    <InputCompo title="Problem Description"  placeholder="Describe the Problem in detail...."  class="pt-4" className="h-40 w-150 mt-4 pl-4 rounded-sm border-1 border-gray-400 bg-gray-200"/>
    <button  className="bg-blue-500 mt-5 h-10 w-30 rounded-sm text-gray-200">Post a Problem</button>

   </div>
   </div>
    </div>
}