import React from "react";
import { Provider as TodoProvider } from "context/TodoContext";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
