import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodoTasks } from "./types";
import { v1 } from "uuid";

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
    updateTaskAction: (
      state,
      action: PayloadAction<{
        id: string;
        changes: Partial<Omit<TTodoTasks, "id">>;
      }>,
    ) => {
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload.changes } : t,
      );
    },
  },
});

export const { addTaskAction, removeTaskAction, updateTaskAction } =
  todoTaskSlice.actions;
export const todoTaskReducer = todoTaskSlice.reducer;
