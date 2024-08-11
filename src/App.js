// src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
