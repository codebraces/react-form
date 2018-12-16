import React, { Fragment } from "react";
import FieldWrapper from "./FieldWrapper";
import { IFieldRenderProps } from "../../../src";

const TextField = (props) => (
  <Fragment>
    <label htmlFor={`field-${props.name}`}>{props.label}</label>
    <input
      type="text"
      className={`form-control ${props.errors && props.errors.length > 0 && "is-invalid"}`}
      id={`field-${props.name}`}
      placeholder={props.placeholder}
      onChange={(e) => {
        const value = e.target.value;
        if (props.onChange)
          props.onChange(Number(value) || value);
      }}
      onBlur={(e) => {
        const value = e.target.value;
        if (props.onBlur)
          props.onBlur(Number(value) || value);
      }}
    />
  </Fragment>
);

export default FieldWrapper(TextField);
