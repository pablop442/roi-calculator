import React from "react";
import PropTypes from "prop-types";

function Output(props) {
  return (
    <>
      <div class="alert alert-primary" role="alert">
        {props.result}
      </div>
    </>
  );
}

Output.propTypes = {
    result: PropTypes.func,
}

export default Output;
