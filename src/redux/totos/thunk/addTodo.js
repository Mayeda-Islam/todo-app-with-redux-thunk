import { added } from "../action";

export const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos`, {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        complete: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};
