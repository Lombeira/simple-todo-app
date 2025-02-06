import React from "react";
import { USERS_MOCK } from "../mocks/user";

export const TodoItem = ({ todo, handleChange, deleteTodo }) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };

  const { completed, id, title, assignedTo } = todo;

  const assignedUserName = assignedTo && USERS_MOCK.find((user) => user.id === assignedTo).name;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      {assignedUserName && <p>{assignedUserName}</p>}
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
}
