import React, { Fragment } from "react";
import { IFieldRenderProps } from "../../../src";
import FieldWrapper from "./FieldWrapper";

const SelectField = (props) => (
  <Fragment>
    <label htmlFor={`field-${props.name}`}>{props.label}</label>
    <select
      className={`form-control ${props.errors && props.errors.length > 0 && "is-invalid"}`}
      id={`field-${props.name}`}
      value={props.value}
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
    >
      {props.customProps.options.map((option, index) =>
        <option value={option.value} key={option.key || index} disabled={option.disabled}>{option.text}</option>)}

    </select>
  </Fragment>
);

export default FieldWrapper(SelectField);
