import { loaded } from "../action";

export const fetchTodos = async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos`);
  const todos = await response.json();
  console.log(todos, "from line 6");
  dispatch(loaded(todos));
};
