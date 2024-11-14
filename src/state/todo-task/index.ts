import { combineReducers } from "@reduxjs/toolkit";
import { todoTaskReducer } from "./slice";

export const todoTaskReducers = combineReducers({
  tasks: todoTaskReducer,
});
