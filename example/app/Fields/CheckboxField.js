import React from "react";

import { IFieldRenderProps } from "../../../src";
import FieldWrapper from "./FieldWrapper";

const CheckboxField = (props) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id={`field-${props.name}`}
      checked={props.value}
      onChange={(e) => {
        const value = e.target.checked;
        if (props.onChange)
          props.onChange(Number(value) || value);
      }}
      onBlur={(e) => {
        const value = e.target.checked;
        if (props.onBlur)
          props.onBlur(Number(value) || value);
      }}
    />
    <label className="form-check-label" htmlFor={`field-${props.name}`}>
      {props.label}
    </label>
  </div>
);

export default FieldWrapper(CheckboxField);
