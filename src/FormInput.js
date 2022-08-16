import React from "react";

function FormInput({
  text,
  placeholder,
  value,
  onInput,
  onKeyUp,
  readOnly = false,
  onChange,
  onFocus,
}) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{text}</span>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        className="form-control"
        onInput={onInput}
        onKeyUp={onKeyUp}
        readOnly={readOnly}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}

export default FormInput;
