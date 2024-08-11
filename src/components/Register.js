// src/components/Register.js

import React, { useState } from 'react';
import '../styles/App.css';

function Register({ toggleForm }) {
  const [role, setRole] = useState('patient'); // Estado para el rol seleccionado

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={handleRoleChange} required>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={toggleForm}>Login here</span>
      </p>
    </div>
  );
}

export default Register;
