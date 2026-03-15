import React from 'react'
import { useState } from 'react';

const App = () => {

  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; 
    setList([...list, task]);       
    setTask("");                    
  };


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple List Adder</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;