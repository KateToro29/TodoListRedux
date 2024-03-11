// TodoForm.js
import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newTodo = {
      title,
      description,
      creationDate: new Date(),
    };

    addTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='ContainerForm'>
      <div>
        <h2>Create New Todo</h2>
      </div>
      <div>
        <form className='' onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <button type="submit">Create Todo</button>
        </form>
      </div>
      
      
    </div>
  );
};

export default TodoForm;


