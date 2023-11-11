import { added, colorselected } from "../action";

export const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await response.json();
    dispatch(colorselected(todo.id, todo.color));
  };
};
