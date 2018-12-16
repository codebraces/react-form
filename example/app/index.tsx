import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

class App extends React.Component<{}, {}> {
  public render() {
    return(
      <div>
        <Form />
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
