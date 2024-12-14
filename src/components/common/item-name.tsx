import React, { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import styled from "styled-components";
import { Input } from "antd";

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  min-height: 33px;
  font-size: 20px;
  font-weight: 300;
`;

const ItemNameInput = styled(Input)`
  max-width: 210px;
  width: 100%;
`;

const ItemNameTitle = styled.span<{ $error?: boolean }>`
  color: ${(props) => (props.$error ? "red" : "black")};
`;

type TProps = {
  title: string;
  onChange: (newValue: string) => void;
};

export const ItemName = memo(({ title, onChange }: TProps) => {
  const [error, setError] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemTitle, setItemTitle] = useState<string | undefined>(title);

  const activateEditMode = () => {
    setEditMode(true);
    setItemTitle(undefined);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (itemTitle) {
      setError(false);
      onChange(itemTitle);
    } else {
      setError(true);
      setItemTitle("You have to write a title!");
    }
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (itemTitle && e.key === "Enter") {
      setError(false);
      setEditMode(false);
      onChange(itemTitle);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.currentTarget.value);
  };

  return (
    <Wrapper>
      {editMode ? (
        <ItemNameInput
          placeholder="Write your new title here"
          value={itemTitle}
          onChange={onChangeHandler}
          onBlur={deactivateEditMode}
          onKeyDown={onKeyPressHandler}
          autoFocus
        />
      ) : (
        <ItemNameTitle $error={error} onDoubleClick={activateEditMode}>
          {itemTitle}
        </ItemNameTitle>
      )}
    </Wrapper>
  );
});
