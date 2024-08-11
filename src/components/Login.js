import React from 'react';
import '../styles/App.css';  // Actualiza la referencia al archivo de estilos

function Login({ toggleForm }) {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <span onClick={toggleForm}>Register here</span>
      </p>
    </div>
  );
}

export default Login;
