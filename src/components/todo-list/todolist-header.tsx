import React, { FC } from "react";
import styled from "styled-components";
import { useTodoListContext } from "../../services/todolist-service";
import { ItemName } from "../common/item-name";
import { useTodoListTitleSelector } from "../../state/todo-list/selectors";
import { AddItemForm } from "../common/add-item-form";
import { useTodoTaskContext } from "../../services/todotask-service";

const TodoListHeaderWrapper = styled.div`
  text-align: center;
  width: 320px;
  height: 80px;
  padding: 20px;
  border-bottom: 1px solid black;
`;

const TodoListItemNameWrapper = styled.div`
  margin-bottom: 10px;
`;

const TodoListErrorNameWrapper = styled.div`
  margin-bottom: 10px;
  color: red;
`;

export const TodolistHeader: FC = () => {
  const title = useTodoListTitleSelector();
  const { changeTodoListTitle } = useTodoListContext();
  const { addTask } = useTodoTaskContext();

  return (
    <TodoListHeaderWrapper>
      {title ? (
        <>
          <TodoListItemNameWrapper>
            <ItemName title={title} onChange={changeTodoListTitle} />
          </TodoListItemNameWrapper>
          <AddItemForm addItem={addTask} />
        </>
      ) : (
        <>
          <TodoListErrorNameWrapper>
            <ItemName
              title={"You have to write a list title!"}
              onChange={changeTodoListTitle}
            />
          </TodoListErrorNameWrapper>
          <AddItemForm addItem={addTask} />
        </>
      )}
    </TodoListHeaderWrapper>
  );
};
