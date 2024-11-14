import React from "react";
import { TodolistHeader } from "./components/todo-list/todolist-header";
import { TodolistBody } from "./components/todo-list/todolist-body";
import { TodolistFooter } from "./components/todo-list/todolist-footer";
import { AnimatedTextWrapper, AppWrapper } from "./styles/styles";

function App() {
  return (
    <AppWrapper>
      <TodolistHeader />
      <TodolistBody />
      <TodolistFooter />
      <AnimatedTextWrapper>
        <div>A simple todolist project</div>
        <div>By: @shittyplayerinreallife</div>
      </AnimatedTextWrapper>
    </AppWrapper>
  );
}

export default App;
