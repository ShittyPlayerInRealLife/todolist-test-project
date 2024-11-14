import { FC } from "react";
import styled from "styled-components";
import { useTodoListContext } from "../../services/todolist-service";
import { TTodoFilterValues } from "../../state/todo-list/types";
import { Button } from "antd";

const TodoListFooterWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 300px;
  height: 30px;
  padding: 18px 20px 20px 40px;
  gap: 16px;
`;

export const TodolistFooter: FC = () => {
  const { changeTodoListFilter } = useTodoListContext();

  const onChangeFilterHandler = (listFilter: TTodoFilterValues) => {
    switch (listFilter) {
      case "all": {
        return changeTodoListFilter("all");
      }
      case "active": {
        return changeTodoListFilter("active");
      }
      case "completed": {
        return changeTodoListFilter("completed");
      }
    }
  };

  return (
    <TodoListFooterWrapper>
      <Button onClick={() => onChangeFilterHandler("all")}>All</Button>
      <Button onClick={() => onChangeFilterHandler("active")}>Active</Button>
      <Button onClick={() => onChangeFilterHandler("completed")}>
        Completed
      </Button>
    </TodoListFooterWrapper>
  );
};
