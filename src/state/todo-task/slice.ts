import { TTodoTasks } from "./types";
import { v1 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [{ id: v1(), title: "An example of task", isDone: false }];

const todoTaskSlice = createSlice({
  name: "todo-task",
  initialState: initialState as TTodoTasks[],
  reducers: {
    addTaskAction: (state, action: PayloadAction<string>) => {
      return [...state, { id: v1(), title: action.payload, isDone: false }];
    },
    removeTaskAction: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload);
    },
    changeTaskTitleAction: (
      state,
      action: PayloadAction<{ id: string; title: string }>,
    ) => {
      return state.map((t) => {
        return t.id === action.payload.id
          ? { ...t, title: action.payload.title }
          : { ...t };
      });
    },
    changeTaskStatusAction: (
      state,
      action: PayloadAction<{ id: string; isDone: boolean }>,
    ) => {
      return state.map((t) => {
        return t.id === action.payload.id
          ? { ...t, isDone: action.payload.isDone }
          : { ...t };
      });
    },
  },
});

export const {
  addTaskAction,
  removeTaskAction,
  changeTaskTitleAction,
  changeTaskStatusAction,
} = todoTaskSlice.actions;
export const todoTaskReducer = todoTaskSlice.reducer;
