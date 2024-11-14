import React, { memo } from "react";
import styled from "styled-components";
import { ItemName } from "../common/item-name";
import { useTodoTaskContext } from "../../services/todotask-service";
import { Button, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const TodoTaskWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ErrorTaskTitleWrapper = styled.div`
  color: red;
`;

type TProps = {
  id: string;
  title: string;
  isDone: boolean;
};

export const TodoTask = memo(({ id, title, isDone }: TProps) => {
  const { changeTaskTitle, removeTask, changeTaskStatus } =
    useTodoTaskContext();

  const removeTaskHandler = (taskId: string) => {
    removeTask(taskId);
  };

  const changeTaskTitleHandler = (newTitle: string) => {
    changeTaskTitle(id, newTitle);
  };

  const changeTaskStatusHandler = (taskId: string, isTaskDone: boolean) => {
    changeTaskStatus(taskId, !isTaskDone);
  };

  return (
    <TodoTaskWrapper>
      <Checkbox
        defaultChecked={isDone}
        onChange={() => changeTaskStatusHandler(id, isDone)}
      />
      {title ? (
        <ItemName title={title} onChange={changeTaskTitleHandler} />
      ) : (
        <ErrorTaskTitleWrapper>
          <ItemName
            title={"You have to write a title!"}
            onChange={changeTaskTitleHandler}
          />
        </ErrorTaskTitleWrapper>
      )}
      <Button type="primary" danger onClick={() => removeTaskHandler(id)}>
        <CloseOutlined />
      </Button>
    </TodoTaskWrapper>
  );
});
