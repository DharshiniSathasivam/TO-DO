import React, { useEffect, useState } from "react";

export const Edit = ({ todo, setTodo, showForm, setShowForm, editid }) => {

  const [todoName, setName] = useState("");
  const [todoDescription, setDescripion] = useState("");
  const [status,todoStaus]=useState("")
  useEffect(()=>{
    const SelectTodo = todo.filter((ToDo,idx)=>idx==editid);
    setName(SelectTodo[0].name)
    setDescripion(SelectTodo[0].description)
    todoStaus(SelectTodo[0].status)
  },[editid])
  const Update = () => {
    const editTodo = {
      name: todoName,
      description: todoDescription,
    };
    todo[editid]=editTodo;
    setTodo([...todo]);
    setShowForm(!showForm)
  };
  return (
    <div className="flex flex-rows-2 justify-center gap-10  ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-xs bg-slate-300"
        value={todoName}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-xs  bg-slate-300"
        value={todoDescription}
        onChange={(e) => setDescripion(e.target.value)}
      />
      <button
        className="btn btn-accent w-24 justify-self-center"
        onClick={Update}> UPDATE
      </button>
    </div>
  );
};
