import { initialState } from "../totos/initialState";
import { colorselected } from "./action";
import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  LODDED,
} from "./actionType";

const nexTodoId = (todos) => {
  const lastId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
  return lastId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nexTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case LODDED:
      return action.payload;
    case TOGGLED:
      console.log(action.payload, "from toggled reducer");
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          console.log("ok");
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });
    case COLORSELECTED:
      const { todoId, color: changedColor } = action.payload;
      console.log(todoId, changedColor, state, "from reducer");
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color: changedColor,
          };
        }
      });
    case DELETED:
      return state?.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state?.filter((todo) => !todo.completed);
    default:
      return state;
  }
};
export default todoReducer;
