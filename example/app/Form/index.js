import React, { Fragment, Component } from "react";
import { Field, Form, validationTypes, ValidateOnTypes } from "../../../src";
import { TextField, TextAreaField, CheckboxField, SelectField, RadioField } from "@braces/reform-bootstrap-fields";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    }
  }
  render() {
    return (
      <div>
        <Form validateOn={ValidateOnTypes.Submit} onSubmit={(e, data) => this.setState({ data })}>
          <Field
            name="fullName"
            label="Full Name"
            placeholder="Enter full name here..."
            render={TextField}
            validationRules={{
              type: validationTypes.String,
              minLength: 5,
            }}
          />
          <Field
            name="fullAdress"
            label="Address"
            placeholder="Enter full name here..."
            render={TextAreaField}
            validationRules={{
              type: validationTypes.String,
              minLength: 5,
              maxLength: 10,
            }}
          />

          <Field
            name="selectfield"
            label="Select Field"
            placeholder="Enter full name here..."
            defaultValue={0}
            customProps={{
              options: [
                { key: 0, value: 0, text: "Select option", disabled: true },
                { key: 1, value: 1, text: "Option 1" },
                { key: 2, value: 2, text: "Option 2" },
                { key: 3, value: 3, text: "Option 3" },
              ],
            }}
            render={SelectField}
          />

          <Field
            name="radioField"
            label="Radio Options Field"
            placeholder="Enter full name here..."
            defaultValue={0}
            customProps={{
              options: [
                { key: 0, value: 0, text: "Select option", disabled: true },
                { key: 1, value: 1, text: "Radio Option 1" },
                { key: 2, value: 2, text: "Radio Option 2" },
                { key: 3, value: 3, text: "Radio Option 3" },
              ],
            }}
            render={RadioField}
          />
          <button className="btn btn-primary">Submit</button>
        </Form>
        {this.state.data ?
        [<h3 key="head">Form Values</h3>,
        <p key="p">
          {JSON.stringify(this.state.data)}
        </p>] : null}
      </div>
    )
  }
}
