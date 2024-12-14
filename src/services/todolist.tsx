import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { useAppDispatch } from "../state";
import { FilterValues } from "../state/todo-list/types";
import {
  changeTodoListFilterAction,
  changeTodoListTitleAction,
} from "../state/todo-list/slice";

type TContext = {
  changeTodoListTitle: (newTitle: string) => void;
  changeTodoListFilter: (filter: FilterValues) => void;
};

const context = createContext<TContext>({
  changeTodoListTitle: () => {},
  changeTodoListFilter: () => {},
});

export const useTodoListContext = () => useContext(context);

export const TodolistService: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const changeTodoListTitle = useCallback(
    (newTitle: string) => dispatch(changeTodoListTitleAction(newTitle)),
    [],
  );

  const changeTodoListFilter = useCallback(
    (filter: FilterValues) => dispatch(changeTodoListFilterAction(filter)),
    [],
  );

  return (
    <context.Provider value={{ changeTodoListTitle, changeTodoListFilter }}>
      {children}
    </context.Provider>
  );
};
