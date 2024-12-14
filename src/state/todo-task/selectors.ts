import { TTodoTasks } from "./types";
import { useAppSelector } from "../index";

export const useTodoTasksSelector = (): TTodoTasks[] => {
  return useAppSelector((state) => state.todoTasks.tasks);
};
