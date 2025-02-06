import React, { useState } from "react";
import { TodosList } from "./TodosList";
import Header from "./Header";
import { InputTodo } from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { TODOS_MOCK } from "../mocks/todo";


export const TodoContainer = () => {
  const [todos, setTodos] = useState(TODOS_MOCK);

  const handleChange = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(newTodos)
  };

  const delTodo = (id) => {
    const newTodos = [...todos.filter((todo) => todo.id !== id)]
    setTodos(newTodos)
  };

  const addTodoItem = ({ title, assignedTo }) => {
    const newTodo = {
      id: uuidv4(),
      title,
      assignedTo,
      completed: false,
    };

    setTodos([...todos, newTodo])
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodo={addTodoItem} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        deleteTodo={delTodo}
      />
    </div>
  );

}

