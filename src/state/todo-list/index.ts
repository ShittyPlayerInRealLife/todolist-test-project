import { combineReducers } from "@reduxjs/toolkit";
import { todoListReducer } from "./slice";

export const todoListReducers = combineReducers({
  todoListTitle: todoListReducer,
  todoListFilter: todoListReducer,
});
