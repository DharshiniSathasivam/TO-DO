import { useState } from "react";
import { Add } from "./Add";
import { Edit } from "./Edit";



export default function MainBar() {
  const data=[{
    name : "Dharshini",
    description:"First Description ",
    status:"Available"
  },{
    name : "Roshini",
    description:"Second Description ",
    status:"Available"
  }]
  
 
  const[todo,setTodo]=useState(data)
  const[showForm,setShowForm]=useState(true)
  const[editid,setedit]=useState("")
  const deleteTodo=(id)=>{
  const remaining =todo.filter((todoInfo,idx)=>idx !== id)
   setTodo(remaining)
  }
  const handleEdit=(id)=>{
    setShowForm(false)
    setedit(id)
  }
  const handleChangeStatus=(id,event)=>{
    todo[id].status=event.target.value;
    setTodo([...todo])
  }
  return (
    <div className="main-bar-col ">
      {showForm===true?(<Add todo={todo} setTodo={setTodo}/>):
      (<Edit todo={todo}
      setTodo={setTodo}
      showForm={showForm}
      setShowForm={setShowForm}
      editid={editid}/>)}
     {todo &&(
      <>{
        todo?.map((todoInfo,idx)=>(
        <div  key={idx} className=" card flex  w-96 bg-base-100 shadow-xl gap-5 p-5 m-6">
        <div className=" card-body flex ">
          <h2 className="card-title">{todoInfo.name}</h2>
          <p>{todoInfo.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent" onClick={()=>handleEdit(idx)}>Edit</button>
            <button className="btn btn-error" onClick={()=>deleteTodo(idx)}>Delete</button>
          </div>
          <select className="select select-bordered select-sm w-24 max-w-xs" onChange={(e)=>handleChangeStatus(idx ,e)}>
                {todoInfo.status=="available" ?(<option> Available </option>):
               <option> UnAvailable </option> }
               {todoInfo.status=="unavailable" ?(<option> unAvailable </option>):
               <option> Available </option> }
         </select>
        </div>
      </div>
        ))
      }</>
     )}
    </div>
  );
}
