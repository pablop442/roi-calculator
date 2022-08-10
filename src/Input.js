import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          {props.label}
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    </>
  );
}

Input.propTypes = {
    label: PropTypes.string,
}

export default Input;
