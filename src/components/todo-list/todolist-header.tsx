import React, { FC } from "react";
import styled from "styled-components";
import { ItemName } from "../common/item-name";
import { AddItemForm } from "../common/add-item-form";
import { useTodoListContext } from "../../services/todolist";
import { useTodoTaskContext } from "../../services/todotask";
import { useTodoListTitleSelector } from "../../state/todo-list/selectors";

const Wrapper = styled.div`
  text-align: center;
  max-width: 320px;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid black;
`;

const ItemNameWrapper = styled.div`
  margin-bottom: 8px;
`;

export const TodolistHeader: FC = () => {
  const title = useTodoListTitleSelector();
  const { addTask } = useTodoTaskContext();
  const { changeTodoListTitle } = useTodoListContext();

  return (
    <Wrapper>
      <ItemNameWrapper>
        <ItemName title={title} onChange={changeTodoListTitle} />
      </ItemNameWrapper>
      <AddItemForm addItem={addTask} />
    </Wrapper>
  );
};
