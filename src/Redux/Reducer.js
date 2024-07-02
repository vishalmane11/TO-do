const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasksAdd));
      return {
        ...state,
        tasks: newTasksAdd,
      };
    case "DELETE_TASK":
      const newTasksDelete = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(newTasksDelete));
      return {
        ...state,
        tasks: newTasksDelete,
      };
    case "EDIT_TASK":
      const newTasksEdit = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasksEdit));
      return {
        ...state,
        tasks: newTasksEdit,
      };
    case "TOGGLE_TASK":
      const newTasksToggle = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasksToggle));
      return {
        ...state,
        tasks: newTasksToggle,
      };
    default:
      return state;
  }
};

export default rootReducer;
