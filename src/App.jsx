// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './TodoList';
import TodoForm from './TodoForm/TodoForm';
import TodoDetail from './TodoDetail';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/TodoForm" exact>
          <TodoForm addTodo={addTodo} />
        </Route>
        <Route path="/TodoList" exact>
          <TodoList todo={null} />
        </Route>
        <Route path="/" exact>
          <TodoList todos={todos} />
        </Route>
        <Route path="/TodoDetail" exact>
          <TodoDetail todos={todos} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
