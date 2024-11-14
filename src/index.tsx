import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TodoListService } from "./services/todolist-service";
import { TodoTaskService } from "./services/todotask-service";
import { Provider } from "react-redux";
import { store } from "./state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <TodoListService>
      <TodoTaskService>
        <App />
      </TodoTaskService>
    </TodoListService>
  </Provider>,
);
