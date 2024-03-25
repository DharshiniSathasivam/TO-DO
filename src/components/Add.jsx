import React, { useState } from 'react'

export const Add = ({todo,setTodo}) => {
      const[todoName,setName]=useState("")
      const[todoDescription,setDescripion]=useState("")
      const addTodo=()=>{
        const newAddTodo={
          name : todoName,
          description:todoDescription,
          status:"Available",
        }
        setTodo([...todo,newAddTodo])
        }
  return (
    <div className='flex flex-rows-2 justify-center gap-10  '>
      <input type="text" 
      placeholder="Type here" 
      className="input input-ghost w-full max-w-xs bg-slate-300" value={todoName}
      onChange={(e)=>setName(e.target.value)} />
      <input type="text" 
      placeholder="Type here" 
      className="input input-ghost w-full max-w-xs  bg-slate-300 " value={todoDescription}
      onChange={(e)=>setDescripion(e.target.value)} />
       <button className="btn btn-accent w-24 justify-self-center" onClick={addTodo} >ADD</button>
    </div>
  )
}

