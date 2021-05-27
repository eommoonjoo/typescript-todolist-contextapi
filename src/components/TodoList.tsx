import React, { useContext } from "react";
import { Context as TodoContext } from "context/TodoContext";

const TodoList: React.FC = () => {
  const {
    state: { todos },
  } = useContext(TodoContext);

  return todos.length > 0 ? (
    <ul>
      {todos.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  ) : (
    <h2>No Todo's !</h2>
  );
};

export default TodoList;
