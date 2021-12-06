import React, { useState } from "react";
// make a jsx file and i can use emmet abbreviations:3

const Example = () => {
  const [list, setList] = useState(["todo-1", "todo-2", "todo-3"]) 
  const handleAdd =()=>{
    setList([...list, "todo-4"])
  }
  return (
    <div className="wrapper">
      <ul>
        {
          list.map((item, index) => ( //can use brackets instead of braces then brackets..... very cool
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <button onClick={handleAdd}>Add item :3</button>
    </div>
  )
}

export default Example;