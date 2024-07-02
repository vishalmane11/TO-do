import React from "react";
import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    const newName = prompt("Enter new task name:", task.name);
    if (newName && newName.trim() !== "") {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, name: newName } });
    }
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {task.name}
      <div>
        <button onClick={handleEdit} className="btn">
          Edit
        </button>
        <button onClick={handleDelete} className="btn">
          Delete
        </button>
        <button onClick={handleToggle} className="btn">
          {task.completed ? "Undo" : "Complete"}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
