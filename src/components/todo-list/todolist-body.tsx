import { FC } from "react";
import styled from "styled-components";
import { TTodoTasks } from "../../state/todo-task/types";
import { TodoTask } from "./todo-task";
import { useTodoTasksSelector } from "../../state/todo-task/selectors";
import { useTodoListFilterSelector } from "../../state/todo-list/selectors";

const TodoListBodyWrapper = styled.div`
  width: 320px;
  height: 570px;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const TodolistBody: FC = () => {
  const tasks = useTodoTasksSelector();
  const filter = useTodoListFilterSelector();

  const filterTasksHandler = (tasks: TTodoTasks[]) => {
    switch (filter) {
      case "active": {
        return tasks.filter((t) => !t.isDone);
      }
      case "completed": {
        return tasks.filter((t) => t.isDone);
      }
      default: {
        return tasks;
      }
    }
  };

  return (
    <TodoListBodyWrapper>
      {filterTasksHandler(tasks).map((task) => {
        return (
          <TodoTask
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        );
      })}
    </TodoListBodyWrapper>
  );
};
