import React from "react";
import { USERS_MOCK } from "../mocks/user";

export const TodoItem = ({ todo, handleChange, deleteTodo }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { status, id, title, assignedTo } = todo;

  const assignedUserName = assignedTo && USERS_MOCK.find((user) => user.id === assignedTo).name;

  const isCompleted = status === "done";

  return (
    <li className="todo-item">
      <p style={isCompleted ? completedStyle : null}>{title}</p>
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => handleChange({ ...todo, status: e.target.value })}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      {assignedUserName && <p>{assignedUserName}</p>}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
