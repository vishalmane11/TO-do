import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTaskForm from "./TaskForm";
import "./App.css";
const App = () => {
  const [first, setfirst] = useState();
  let change = (e) => {
    setfirst(e.target.value);
  };
  let id = 1;
  var arr = [];
  let addto = () => {
    // arr.push(first);
    arr.push({ id: id++, task: first });
    // console.log(arr);
  };
  console.log(arr);
  return (
    <div className="">
      <h1>Add Task Here</h1>
      {/* <input type="text" onChange={(e) => change(e)} />
      <button onClick={() => addto()}>Add</button>
      {arr.map((val) => {
        return <div>{val.task}</div>;
      })} */}
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
