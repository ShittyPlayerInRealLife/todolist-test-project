import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { useAppDispatch } from "../state";
import {
  addTaskAction,
  changeTaskStatusAction,
  changeTaskTitleAction,
  removeTaskAction,
} from "../state/todo-task/slice";

type TContext = {
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  changeTaskTitle: (id: string, newTitle: string) => void;
  changeTaskStatus: (id: string, isDone: boolean) => void;
};

const context = createContext<TContext>({
  addTask: () => {},
  removeTask: () => {},
  changeTaskTitle: () => {},
  changeTaskStatus: () => {},
});

export const useTodoTaskContext = () => useContext(context);

export const TodoTaskService: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const addTask = useCallback(
    (title: string) => dispatch(addTaskAction(title)),
    [dispatch],
  );

  const removeTask = useCallback(
    (id: string) => dispatch(removeTaskAction(id)),
    [dispatch],
  );

  const changeTaskTitle = useCallback(
    (id: string, title: string) =>
      dispatch(changeTaskTitleAction({ id, title })),
    [dispatch],
  );

  const changeTaskStatus = useCallback(
    (id: string, isDone: boolean) =>
      dispatch(changeTaskStatusAction({ id, isDone })),
    [dispatch],
  );

  return (
    <context.Provider
      value={{ addTask, removeTask, changeTaskTitle, changeTaskStatus }}
    >
      {children}
    </context.Provider>
  );
};
