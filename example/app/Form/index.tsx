import React, { Fragment } from "react";
import { Field, Form, validationTypes } from "../../../src";
export default () => (
  <Form>
    <Field
      name="fullName"
      customProps={{
        test: "TestContent",
      }}
      render={(props) => (
        <div>
          <input />
          <h3>{props.customProps.test}</h3>
        </div>
      )}
      validationRules={{
        type: validationTypes.String,
        minLength: 5,
      }}
    />
  </Form>
);
