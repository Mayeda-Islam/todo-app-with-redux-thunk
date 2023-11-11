import { combineReducers } from "redux";
import todoReducer from "./totos/reducer";
import filterReducer from "./filter/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  filterTodo: filterReducer,
});
