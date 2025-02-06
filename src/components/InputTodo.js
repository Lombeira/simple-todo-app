import React, { useState } from "react";
import { USERS_MOCK } from "../mocks/user";

export const InputTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleChangeTitle = (e) => setTitle(e.target.value)
  const handleChangeAssignedTo = (e) => setAssignedTo(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ title, assignedTo });
    setTitle("")
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={handleChangeTitle}
      />
      <select name="assignedTo" id="assignedTo" value={assignedTo} onChange={handleChangeAssignedTo}>
        <option value="">Select user</option>
        {USERS_MOCK.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}
