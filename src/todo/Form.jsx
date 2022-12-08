import { useTaskContext } from "../context/TaskContext";

const Form = ({
  title,
  setTitle,
  editableState,
  editableData,
  setEditableData,
  setEditableState,
}) => {
  const { tasks, dispatch } = useTaskContext();
  const handleAddTask = () => {
    const task = {
      id: tasks.length + 1,
      title,
      isComplete: false,
    };
    dispatch({ type: "ADD", payload: task });
    setTitle("");
  };

  const handleUpdateTask = () => {
    dispatch({ type: "UPDATE", payload: { ...editableData, title: title } });
    setEditableData(null);
    setEditableState(false);
    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2"
      />
      <button
        onClick={editableState ? handleUpdateTask : handleAddTask}
        className="border p-2"
      >
        {editableState ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default Form;
