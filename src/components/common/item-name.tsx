import React, { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import { Input } from "antd";
import styled from "styled-components";

const ItemNameWrapper = styled.div`
  font-size: 20px;
  font-weight: 300;
  max-width: 300px;
  height: 30px;
`;

type TProps = {
  title: string;
  onChange: (newValue: string) => void;
};

export const ItemName = memo(({ title, onChange }: TProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemTitle, setItemTitle] = useState<string>("");

  const activateEditMode = () => {
    setEditMode(true);
    setItemTitle("");
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    onChange(itemTitle);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditMode(false);
      onChange(itemTitle);
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(e.currentTarget.value);
  };

  return editMode ? (
    <ItemNameWrapper>
      <Input
        style={{ width: `210px` }}
        placeholder="Write your new title here!"
        value={itemTitle}
        onChange={onChangeHandler}
        onBlur={deactivateEditMode}
        onKeyDown={onKeyPressHandler}
        autoFocus
      />
    </ItemNameWrapper>
  ) : (
    <ItemNameWrapper>
      <span onDoubleClick={activateEditMode}>{title}</span>
    </ItemNameWrapper>
  );
});
