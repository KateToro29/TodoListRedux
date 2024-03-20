import React, { useEffect, useState } from "react";
import {store, addTodo } from './../../store'
import { Link, useNavigate } from 'react-router-dom';



function NewTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      state: 'todo'
    };
    //addTodo(newTodo); // Agregar el nuevo todo al contexto global de todos
    store.dispatch(addTodo(newTodo))
    navigate('/')
    //history.push(`/todo/${newTodo.id}`); // Redirigir al usuario a la página de detalles del nuevo todo
  };

  return (
    <div>
      <h1>Nuevo Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => navigate('/')}>Volver</button>

      </form>
    </div>
  );
}

export default NewTodo;
