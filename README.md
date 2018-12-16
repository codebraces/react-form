# React Form
<!-- [![Build Status](https://travis-ci.org/codebraces/reform.svg?branch=master)](https://travis-ci.org/codebraces/reform) -->
[![npm Version](https://img.shields.io/npm/v/@braces/reform.svg)](https://www.npmjs.com/package/@braces/reform)


## Install
1 Install react form as dependency
  ```bash
  # Using yarn package manager
  $ yarn add @braces/reform

  # Using npm package manager
  $ npm install --save @braces/reform
  ```
2 Import React form module
  ```javascript
  // ES6
  import { Form } from "@braces/reform"

  // ES5
  var Form = require("@braces/reform").Form;
  ```
## Example

```javascript
  import React from "react";
  import { Form, Field } from "@braces/reform";

  export default (props) => {
    return (
      <Form onSubmit={(e, values) => console.log(values)} validateOn={1}>
        <Field name="test1" render={(props) => (
          <div>
            <input {...props.input} />
            <ul>
              {props.errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
          </div>
        )}
          validationRules={{
            required: true,
            maxLength: 10,
          }} />
        <Field name="test2" render={(props) => <input {...props.input} />} />
        <Field name="test3" render={(props) => <input {...props.input} />} />
        <button>Submit</button>
      </Form>
    );
  };
```

## Contributing!
All contributions are super welcome!


## License

React Form is MIT licensed.