import { FilterValues, TTodoList } from "./types";
import {
  changeTodoListFilterAction,
  changeTodoListTitleAction,
  todoListReducer,
} from "./slice";

const { ALL, COMPLETED } = FilterValues;

test("todoList should change its name", () => {
  const newTodoListTitle = "3";

  const startState: TTodoList = { title: "1", filter: ALL };

  const endState = todoListReducer(
    startState,
    changeTodoListTitleAction(newTodoListTitle),
  );

  expect(endState.title).toBe(newTodoListTitle);
});

test("todoList should change its filter", () => {
  const newTodoListFilter = COMPLETED;

  const startState: TTodoList = { title: "1", filter: ALL };

  const endState = todoListReducer(
    startState,
    changeTodoListFilterAction(newTodoListFilter),
  );

  expect(endState.filter).toBe(newTodoListFilter);
});
