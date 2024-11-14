import { useAppSelector } from "../index";
import { TTodoFilterValues } from "./types";

export const useTodoListTitleSelector = (): string => {
  return useAppSelector((state) => state.todoList.todoListTitle.title);
};

export const useTodoListFilterSelector = (): TTodoFilterValues => {
  return useAppSelector((state) => state.todoList.todoListFilter.filter);
};
