import React, { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AddItemFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

type TProps = {
  addItem: (title: string) => void;
};

export const AddItemForm = memo(({ addItem }: TProps) => {
  const [itemTitle, setItemTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.key === "Enter") {
      addItemHandler();
    }
  };

  const addItemHandler = () => {
    if (itemTitle.trim() !== "") {
      addItem(itemTitle.trim());
      setItemTitle("");
    } else {
      setError("Title is required");
    }
  };

  return (
    <AddItemFormWrapper>
      <Input
        style={{ width: `264px` }}
        placeholder={
          error ? "Title is required!" : "Choose a title for a task!"
        }
        status={error ? "error" : ""}
        value={itemTitle}
        onChange={onChangeHandler}
        onKeyDown={onKeyPressHandler}
      />
      <Button type="primary" onClick={addItemHandler}>
        <PlusOutlined />
      </Button>
    </AddItemFormWrapper>
  );
});
