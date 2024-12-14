import React, { FC } from "react";
import { AppWrapper } from "./styles/styles";
import { TodolistHeader } from "./components/todo-list/todolist-header";
import { TodolistBody } from "./components/todo-list/todolist-body";
import { TodolistFooter } from "./components/todo-list/todolist-footer";
import { AnimatedText } from "./components/animated-text";

export const AppLayout: FC = () => (
  <AppWrapper>
    <TodolistHeader />
    <TodolistBody />
    <TodolistFooter />
    <AnimatedText />
  </AppWrapper>
);
