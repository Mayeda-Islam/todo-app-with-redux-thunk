import { added, toggled } from "../action";

export const updateTodo = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await response.json();
    console.log(todo, "uDATE todo");
    dispatch(toggled(todo.id));
  };
};
