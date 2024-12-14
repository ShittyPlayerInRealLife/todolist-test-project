import { FC, useMemo } from "react";
import styled from "styled-components";
import { TodoTask } from "./todo-task";
import { useTodoTasksSelector } from "../../state/todo-task/selectors";
import { useTodoListFilterSelector } from "../../state/todo-list/selectors";

const Wrapper = styled.div`
  max-width: 320px;
  width: 100%;
  min-height: 570px;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const TodolistBody: FC = () => {
  const tasks = useTodoTasksSelector();
  const filter = useTodoListFilterSelector();

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "all": {
        return tasks;
      }
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
  }, [tasks, filter]);

  return (
    <Wrapper>
      {filteredTasks.map((task) => {
        return (
          <TodoTask
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        );
      })}
    </Wrapper>
  );
};
