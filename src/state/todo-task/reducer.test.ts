import { TTodoTasks } from "./types";
import {
  addTaskAction,
  changeTaskStatusAction,
  changeTaskTitleAction,
  removeTaskAction,
  todoTaskReducer,
} from "./slice";

test("correct task should be added", () => {
  const newTaskTitle = "3";

  const startState: TTodoTasks[] = [
    { id: "1", title: "1", isDone: false },
    { id: "2", title: "2", isDone: false },
  ];

  const action = addTaskAction(newTaskTitle);
  const endState = todoTaskReducer(startState, action);

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTaskTitle);
  expect(endState[2].isDone).toBeFalsy();
});

test("correct task should be removed from correct array", () => {
  const startState: TTodoTasks[] = [
    { id: "1", title: "1", isDone: false },
    { id: "2", title: "2", isDone: false },
  ];

  const action = removeTaskAction("2");
  const endState = todoTaskReducer(startState, action);

  expect(endState.length).toBe(1);
  expect(endState.every((t) => t.id !== "2")).toBeTruthy();
});

test("correct task should change its title", () => {
  const taskNewTitle = "3";

  const startState: TTodoTasks[] = [
    { id: "1", title: "1", isDone: false },
    { id: "2", title: "2", isDone: false },
  ];

  const action = changeTaskTitleAction({ id: "2", title: taskNewTitle });
  const endState = todoTaskReducer(startState, action);

  expect(endState[0].title).toBe("1");
  expect(endState[1].title).toBe(taskNewTitle);
});

test("correct task should change its status", () => {
  const startState: TTodoTasks[] = [
    { id: "1", title: "1", isDone: false },
    { id: "2", title: "2", isDone: false },
  ];

  const action = changeTaskStatusAction({ id: "2", isDone: true });
  const endState = todoTaskReducer(startState, action);

  expect(endState[0].isDone).toBeFalsy();
  expect(endState[1].isDone).toBeTruthy();
});
