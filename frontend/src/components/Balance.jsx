
export function Balance({value}){
   
    return <div className="flex">
        <div className="font-bold text-lg text-gray-500 ">Your Balance :</div>
        <div className="font-semibold ml-4 text-lg text-gray-600">Rs {value}</div>
    </div>
}