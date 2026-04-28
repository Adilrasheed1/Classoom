import { ProblemsCard } from "../components/ProblemsCard";

import { useNavigate } from "react-router-dom";
export function Classroom(){
    const navigate=useNavigate()
    return <div>
        <div className="h-20 w-full bg-gray-200 flex justify-between">
            <div><h3 className="pl-5 pt-5 text-2xl font-semibold">CodeClass</h3></div>
            <div>
            <h3 className="pr-10 pt-4 text-lg font-semibold">Adil</h3>
            <span><p className="text-gray-400">Score:0</p></span>
           </div>
       </div>
       <div className="mt-8 ml-5  h-10 w-70 flex justify-between">
        <button className="bg-blue-500 w-30  rounded-sm text-gray-200">Problems</button>
         <button className="bg-blue-500 w-30 rounded-sm text-gray-200">Leaderboard</button>
       </div>
       <div className="flex justify-between mt-10 ml-5 mr-5">
        <h3 className="text-lg font-semibold">Problems</h3>
        <button  onClick={()=>navigate('/postproblem')} className="bg-blue-500 h-10 w-30 rounded-sm text-gray-200">Post a Problem</button>
       </div>
       <div className="mt-5">
        <ProblemsCard title="Two Sum" description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."/>
        <ProblemsCard title="Reverse Linked List" description="Given the head of a singly linked list, reverse the list, and return the reversed list."/>
       </div>
    </div>
}