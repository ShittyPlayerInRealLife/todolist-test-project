import { FilterValues } from "./types";
import { useAppSelector } from "../index";

export const useTodoListTitleSelector = (): string => {
  return useAppSelector((state) => state.todoList.todoListTitle.title);
};

export const useTodoListFilterSelector = (): FilterValues => {
  return useAppSelector((state) => state.todoList.todoListFilter.filter);
};
