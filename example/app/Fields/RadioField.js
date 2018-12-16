import React, { Fragment } from "react";
import { IFieldRenderProps } from "../../../src";
import FieldWrapper from "./FieldWrapper";

const RadioField = (props) => (
  <Fragment>
    {props.customProps.options.map((option, index) => (
      <div className="form-check" key={option.key || index}>
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id={`field-${props.name}-${option.value}`}
          value={option.value}
          disabled={option.disabled}
          onChange={(e) => {
            const value = e.target.value;
            if (props.onChange)
              props.onChange(Number(value) || value);
            if (props.onBlur)
              props.onBlur(Number(value) || value);
          }}
        />
        <label className="form-check-label" htmlFor={`field-${props.name}-${option.value}`}>
          {option.text}
        </label>
      </div>
    ))}
  </Fragment>
);

export default FieldWrapper(RadioField);
