import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { todoListReducers } from "./todo-list";
import { todoTaskReducers } from "./todo-task";

const appReducer = combineReducers({
  todoList: todoListReducers,
  todoTasks: todoTaskReducers,
});

export type RootCombine = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootCombine, action) => {
  return appReducer(state, action);
};
