export const addTodo = (todo: TodoItem): CounterAction => ({
  type: "ADD",
  payload: todo,
});

export const deleteTodo = (id: string): CounterAction => ({
  type: "DELETE",
  payload: id,
});
