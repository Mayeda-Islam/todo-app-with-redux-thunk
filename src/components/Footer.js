import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/action";

const numberOfTodos = (num_of_todo) => {
  switch (num_of_todo) {
    case 1:
      return `1 task`;
    case 0:
      return ` no task`;
    default:
      return `${num_of_todo} task`;
  }
};

export default function Footer() {
  //   const filterTodo = useSelector((state) => state.filterTodo);
  //   console.log(filterTodo);
  const todos = useSelector((state) => state.todos);

  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();
  const filterTodo = useSelector((state) => state.filterTodo);
  const { status, colors } = filterTodo;

  //chage status
  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColorChange = (color) => {
    console.log(color);
    if (colors.includes(color)) {
      console.log("no");
      dispatch(colorChanged("remove", color));
    } else {
      dispatch(colorChanged("added", color));
      console.log("no");
    }
  };
  console.log(colors);
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer 
          ${colors.includes("green") && "bg-green-500"} 
          `}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
}
