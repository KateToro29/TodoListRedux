import React from 'react';
import ReactDOM from 'react-dom';  // Cambiado desde 'react-dom/client'
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
