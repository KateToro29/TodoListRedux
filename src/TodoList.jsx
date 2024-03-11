// TodoList.js
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
