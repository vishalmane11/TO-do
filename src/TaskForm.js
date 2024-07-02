import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

const AddTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      name: taskName,
      completed: false, // Default is task is not completed
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    // Reset input field
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
