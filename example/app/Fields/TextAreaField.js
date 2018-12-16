import React, { Fragment } from 'react';
import { IFieldRenderProps } from "../../../src";
import FieldWrapper from "./FieldWrapper";

class TextAreaField extends React.PureComponent{
  render() {
    return (
      <Fragment >
        <label htmlFor={`field-${this.props.name}`}>{this.props.label}</label>
        <textarea
          className={`form-control ${this.props.errors && this.props.errors.length > 0 && "is-invalid"}`}
          id="exampleFormControlTextarea1"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={(e) => {
            const value = e.target.value;
            if (this.props.onChange)
              this.props.onChange(Number(value) || value);
          }}
          onBlur={(e) => {
            const value = e.target.value;
            if (this.props.onBlur)
              this.props.onBlur(Number(value) || value);
          }}
          rows={this.props.customProps && this.props.customProps.rows || 4}
        />
      </Fragment>
    );
  }
}

export default FieldWrapper(TextAreaField);
