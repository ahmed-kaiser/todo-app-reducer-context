import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";

const TaskContext = createContext(null);

const initialState = [{id: 1, title: "task 1", isComplete:true}];

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const data = {
    tasks,
    dispatch,
  };
  return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
