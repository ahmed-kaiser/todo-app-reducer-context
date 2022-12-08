import { useTaskContext } from "../context/TaskContext";

const TodoList = ({ onEditTask }) => {
  const { tasks, dispatch } =  useTaskContext();

  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleCompleteTask = (task) => {
    dispatch({ type: "COMPLETE", payload: {...task, isComplete: !task.isComplete} });
  };

  return (
    <div>
      {
        tasks.length > 0 && 
        <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => handleCompleteTask(task)}
              />
              <p>{task.title}</p>
            </div>
            <div>
              <button
                onClick={() => onEditTask(task)}
                className="border py-1 px-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="border py-1 px-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      }
    </div>
  );
};

export default TodoList;
