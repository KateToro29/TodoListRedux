
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { updateTodo, store, removeTodo, addTodo, cleanList } from './store';


function TodoList() {
  
  const todoList = useSelector((state) => state.value)

  useEffect(() => {
    console.log(todoList)
  }, [todoList]);

  const toggleState = function(todoId){
    const todo = todoList.find(t => +t.id === +todoId);

    if(!todo){
      console.error('invalied todo');
      return;
    }

    const newTodo = {
      ...todo,
      state: todo.state === 'done' ? 'todo' : 'done'
    }
    store.dispatch(updateTodo(newTodo))
  }

  const handleDeleteTodo = function (todoId) {
    store.dispatch(removeTodo(todoId))
  }

  const cleanStore = function (todoId) {
    store.dispatch(cleanList())
  }



  return (
      <div>
        <h1>Lista de Todos</h1>
        <Link to="/new">Nuevo Todo</Link>
        {todoList?.length && <button onClick={() => cleanStore()}>Limpiar lista</button> }
        {todoList?.length && todoList.map(todo => (
          <div key={todo.id}>
            <h2><Link to={`/todo/${todo.id}`}>{todo.title}</Link></h2>
            <h3>{todo.state}</h3>
            <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
            <button onClick={() => toggleState(+todo.id)}>Cambiar estado</button>
          </div>
        ))}
      </div>
  );
}

export default TodoList;
