import { FC } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useTodoListContext } from "../../services/todolist";
import { FilterValues } from "../../state/todo-list/types";

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  max-width: 300px;
  width: 100%;
  padding: 18px 20px 20px 40px;
  gap: 16px;
`;

const { ALL, ACTIVE, COMPLETED } = FilterValues;

export const TodolistFooter: FC = () => {
  const { changeTodoListFilter } = useTodoListContext();

  const onChangeFilterHandler = (filter: FilterValues) => {
    return changeTodoListFilter(filter);
  };

  return (
    <Wrapper>
      <Button onClick={() => onChangeFilterHandler(ALL)}>All</Button>
      <Button onClick={() => onChangeFilterHandler(ACTIVE)}>Active</Button>
      <Button onClick={() => onChangeFilterHandler(COMPLETED)}>
        Completed
      </Button>
    </Wrapper>
  );
};
