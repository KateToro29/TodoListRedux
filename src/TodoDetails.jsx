import React, {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null)
   
  const todoList = useSelector((state) => state.value)

  useEffect(() => {
    console.log(todoList, id)
    // Encuentra el todo correspondiente al ID en la lista de todos
    const todo = todoList.find((todo) => todo.id === parseInt(id));
    setTodo(todo)
  }, [todoList])

  

  return (
    <div>
      <Link to="/">Volver</Link>
      {todo &&  (
        <div>
          <h1>Detalles del Todo</h1>
          <p>ID del Todo: {todo.id}</p>
          <p>Título: {todo.title}</p>
          <p>Descripción: {todo.description}</p>
          <p>Fecha de creación: {todo.createdAt}</p>
        </div>
      ) }

      {!todo && <div>no se ha encontrado la tarea</div>}

    </div>
  );
}

export default TodoDetails;
