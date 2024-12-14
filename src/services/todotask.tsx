import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { useAppDispatch } from "../state";
import { TTodoTasks } from "../state/todo-task/types";
import {
  addTaskAction,
  removeTaskAction,
  updateTaskAction,
} from "../state/todo-task/slice";

type TContext = {
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, changes: Partial<Omit<TTodoTasks, "id">>) => void;
};

const context = createContext<TContext>({
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

export const useTodoTaskContext = () => useContext(context);

export const TodotaskService: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const addTask = useCallback(
    (title: string) => dispatch(addTaskAction(title)),
    [],
  );

  const removeTask = useCallback(
    (id: string) => dispatch(removeTaskAction(id)),
    [],
  );

  const updateTask = useCallback(
    (id: string, changes: Partial<Omit<TTodoTasks, "id">>) =>
      dispatch(updateTaskAction({ id, changes })),
    [],
  );

  return (
    <context.Provider value={{ addTask, removeTask, updateTask }}>
      {children}
    </context.Provider>
  );
};
