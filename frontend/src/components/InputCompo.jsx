export function InputCompo(props){
    return <>
    <label className={props.class}>
       {props.title}
 </label>
    <input  className={props.className} type="text" placeholder={props.placeholder} onChange={props.onChange}/> 
   
    </>
}