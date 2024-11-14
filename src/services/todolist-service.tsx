import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { TTodoFilterValues } from "../state/todo-list/types";
import { useAppDispatch } from "../state";
import {
  changeTodoListFilterAction,
  changeTodoListTitleAction,
} from "../state/todo-list/slice";

type TContext = {
  changeTodoListTitle: (newTitle: string) => void;
  changeTodoListFilter: (filter: TTodoFilterValues) => void;
};

const context = createContext<TContext>({
  changeTodoListTitle: () => {},
  changeTodoListFilter: () => {},
});

export const useTodoListContext = () => useContext(context);

export const TodoListService: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const changeTodoListTitle = useCallback(
    (newTitle: string) => dispatch(changeTodoListTitleAction(newTitle)),
    [dispatch],
  );

  const changeTodoListFilter = useCallback(
    (filter: TTodoFilterValues) => dispatch(changeTodoListFilterAction(filter)),
    [dispatch],
  );

  return (
    <context.Provider value={{ changeTodoListTitle, changeTodoListFilter }}>
      {children}
    </context.Provider>
  );
};
