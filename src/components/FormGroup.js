// src/components/FormGroup.js

import React from 'react';

function FormGroup({ label, type, placeholder, required }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
}

export default FormGroup;
