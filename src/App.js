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
      ],
      route: "login"
    };
  }
  id = 2;

  showLoginPage = e => {
    this.setState({
      route: "login"
    });
  };

  showSignupPage = e => {
    this.setState({
      route: "signup"
    });
  };

  showHelloTextInsideConsole = () => {
    console.log("Hello");
  };

  handleCreate = (data, route) => {
    console.log(data);

    this.setState({
      information: this.state.information.concat({ id: this.id++, ...data }),
      route: route
    });
  };

  render() {
    return (
      <div>
        {this.state.route === "login" ? (
          <Login
            data={this.state.information}
            showSignupPage={this.showSignupPage}
          />
        ) : (
          <Signup
            onCreate={this.handleCreate}
            showLoginPage={this.showLoginPage}
            showHello={this.showHelloTextInsideConsole}
          />
        )}
      </div>
    );
  }
}

export default App;
