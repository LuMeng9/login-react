import React, { Component } from "react";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "menglu",
      pass: "123456789"
    };
  }
  render() {
    return <Login userName={this.state.name} password={this.state.pass} />;
  }
}

export default App;
