import React from "react";
import { TodoItem } from "./TodoItem";

export const TodosList = ({ todos, handleChange, deleteTodo }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    minHeight: '600px',
    padding: '1rem',
  }
  return (
    <div style={{
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
    }}>
      <div>
        <h3>Todo</h3>
        <div style={cardStyle}>
          {todos.map(todo => todo.status === 'todo' && (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>In Progress</h3>
        <div style={cardStyle}>
          {todos.map(todo => todo.status === 'in-progress' && (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>Done</h3>
        <div style={cardStyle}>
          {todos.map(todo => todo.status === 'done' && (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={handleChange}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
