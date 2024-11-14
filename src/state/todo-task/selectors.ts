import { useAppSelector } from "../index";
import { TTodoTasks } from "./types";

export const useTodoTasksSelector = (): TTodoTasks[] => {
  return useAppSelector((state) => state.todoTasks.tasks);
};
