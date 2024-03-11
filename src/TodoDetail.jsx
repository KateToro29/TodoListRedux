// TodoDetail.js
import React from 'react';

const TodoDetail = ({ todo }) => {
  return (
    <div>
      <h2>Todo Detail</h2>
      <p>Title: {todo.title}</p>
      <p>Description: {todo.description}</p>
      <p>Creation Date: {todo.creationDate.toString()}</p>
    </div>
  );
};

export default TodoDetail;
