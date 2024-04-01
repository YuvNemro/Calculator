import React from "react";

function InputField({ id, label, type, placeholder, value, onChange }) {
  return (
    <div className="label-container">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
