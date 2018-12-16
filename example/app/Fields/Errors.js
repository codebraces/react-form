import * as React from "react";

const Errors = ({ errors }) => (
  <div className="invalid-feedback">
    {errors && <div className="error-item">{errors}</div>}
  </div>
);

export default Errors;
