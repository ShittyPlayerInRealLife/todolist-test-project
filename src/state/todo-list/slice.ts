import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodoFilterValues, TTodoList } from "./types";

const initialState = {
  title: "You can change title of Todo-list!",
  filter: "all",
};

const todoListSlice = createSlice({
  name: "todolist",
  initialState: initialState as TTodoList,
  reducers: {
    changeTodoListTitleAction: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeTodoListFilterAction: (
      state,
      action: PayloadAction<TTodoFilterValues>,
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { changeTodoListTitleAction, changeTodoListFilterAction } =
  todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
