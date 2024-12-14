import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state";
import { TodolistService } from "./services/todolist";
import { TodotaskService } from "./services/todotask";
import { AppLayout } from "./app-layout";
import "./index.css";

const App: FC = () => (
  <Provider store={store}>
    <TodolistService>
      <TodotaskService>
        <AppLayout />
      </TodotaskService>
    </TodolistService>
  </Provider>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
