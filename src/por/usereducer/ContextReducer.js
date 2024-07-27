import { createContext} from "react";

export const TaskDispatchContext = createContext(null)
export const TaskContext = createContext(null)
export const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];

