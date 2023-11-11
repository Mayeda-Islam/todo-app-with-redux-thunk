import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import { fetchTodos } from "../redux/totos/thunk/fetchTodos";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filterTodos = useSelector((state) => state.filterTodo);
  const { status, colors } = filterTodos;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    if (colors.length > 0) {
      console.log(todo?.priority);
      return colors.includes(todo?.priority);
    }
    return todo;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
