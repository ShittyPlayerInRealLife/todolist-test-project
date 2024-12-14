import React, { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddItemFormInput = styled(Input)`
  max-width: 264px;
  width: 100%;
`;

type TProps = {
  addItem: (title: string) => void;
};

export const AddItemForm = memo(({ addItem }: TProps) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [itemTitle, setItemTitle] = useState<string | undefined>(undefined);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== undefined) {
      setError(undefined);
    }
    if (e.key === "Enter") {
      addItemHandler();
    }
  };

  const addItemHandler = () => {
    if (itemTitle !== undefined) {
      addItem(itemTitle.trim());
      setItemTitle(undefined);
    } else {
      setError("Title is required");
    }
  };

  return (
    <Wrapper>
      <AddItemFormInput
        placeholder={error ? "Title is required!" : "Choose a title for a task"}
        status={error ? "error" : undefined}
        value={itemTitle}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <Button type="primary" onClick={addItemHandler}>
        <PlusOutlined />
      </Button>
    </Wrapper>
  );
});
