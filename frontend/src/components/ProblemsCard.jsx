export function ProblemsCard(props){
    return <>
        <div className="h-40  ml-5 mt-5 pl-5 pt-5 w-200 bg-gray-200 rounded-sm">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-gray-500">{props.description}</p>
        </div>
    </>
}