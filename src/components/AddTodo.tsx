import React, { FormEvent, useRef, useContext } from "react";
import { Context as TodoContext } from "context/TodoContext";

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);

  return <div></div>;
};

export default AddTodo;
