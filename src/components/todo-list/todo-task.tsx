import React, { memo, useCallback } from "react";
import styled from "styled-components";
import { Button, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { ItemName } from "../common/item-name";
import { useTodoTaskContext } from "../../services/todotask";

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

type TProps = {
  id: string;
  title: string;
  isDone: boolean;
};

export const TodoTask = memo(({ id, title, isDone }: TProps) => {
  const { removeTask, updateTask } = useTodoTaskContext();

  const changeTaskTitleHandler = useCallback(
    (newTitle: string) => {
      updateTask(id, { title: newTitle });
    },
    [updateTask],
  );

  const changeTaskStatusHandler = (taskId: string, isTaskDone: boolean) => {
    updateTask(taskId, { isDone: !isTaskDone });
  };

  return (
    <Wrapper>
      <Checkbox
        defaultChecked={isDone}
        onChange={() => changeTaskStatusHandler(id, isDone)}
      />
      <ItemName title={title} onChange={changeTaskTitleHandler} />
      <Button type="primary" danger onClick={() => removeTask(id)}>
        <CloseOutlined />
      </Button>
    </Wrapper>
  );
});
