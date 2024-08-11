import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';  // Importa el archivo de estilos correcto
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
