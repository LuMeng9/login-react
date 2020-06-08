import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [
        {
          id: 0,
          firstName: "meng",
          lastName: "lu",
          email: "lumeng1995@outlook.com",
          phone: "8613804972497",
          password: "123456789"
        },
        {
          id: 1,
          firstName: "meallon",
          lastName: "lu",
          email: "meallonlu1995@outlook.com",
          phone: "8613804972497",
          password: "123456789"
        }
      ]
    };
  }
  id = 2;

  handleCreate = data => {
    console.log(data);

    this.setState({
      information: this.state.information.concat({ id: this.id++, ...data })
    });
    console.log(this.state.information);
  };

  render() {
    return (
      <div>
        <Login data={this.state.information} />
        <Signup onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
