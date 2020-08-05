import React from 'react';

export default function FormField({ label, type, value, name, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} name={name} onChange={onChange} />
      </label>
    </div>
  );
}
