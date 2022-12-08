import Todo from "./todo/Todo";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  );
}

export default App;
