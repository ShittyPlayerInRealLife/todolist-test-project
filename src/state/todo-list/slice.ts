import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodoList } from "./types";
import { FilterValues } from "./types";

const initialState = {
  title: "You can change title of Todo-list!",
  filter: FilterValues.ALL,
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
      action: PayloadAction<FilterValues>,
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { changeTodoListTitleAction, changeTodoListFilterAction } =
  todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;
