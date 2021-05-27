interface TodoItem {
  id: string;
  title: string;
  active: boolean;
}

interface CounterState {
  todos: TodoItem[];
}

interface ContextModel {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

type CounterAction =
  | { type: "ADD"; payload: TodoItem }
  | { type: "DELETE"; payload: string };

//Discriminated Union 을 사용할 수 있다.
