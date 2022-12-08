import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const Todo = () => {
  const [title, setTitle] = useState("");
  const [editableState, setEditableState] = useState(false);
  const [editableData, setEditableData] = useState(null);

  const handleEditButtonClick = (task) => {
    setEditableState(true);
    setEditableData(task);
    setTitle(task.title);
  };

  return (
      <div className="max-w-screen-sm border mx-auto mt-16 p-4">
        <h1 className="font-serif text-xl font-semibold text-center mb-6">
          Todo List
        </h1>
        <Form
          title={title}
          setTitle={setTitle}
          editableState={editableState}
          setEditableData={setEditableData}
          editableData = {editableData}
          setEditableState={setEditableState}
        />
        <TodoList
          onEditTask={handleEditButtonClick}
        />
      </div>
  );
};

export default Todo;
