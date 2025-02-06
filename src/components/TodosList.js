import React from "react";
import { TodoItem } from "./TodoItem";

export const TodosList = ({ todos, handleChange, deleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
