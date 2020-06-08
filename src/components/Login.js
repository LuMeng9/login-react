import React, { Component } from "react";
import logo from "../logo.svg";
import "./Login.css";
import SignUp from "./Signup";
import Home from "./Home";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: "",
      errMsg: "",
      successMsg: "",
      loginStatus: false,
      showSignUp: false
    };
  }

  handleChange = event => {
    let targetInputType = event.target.name;
    let targetInputValue = event.target.value;

    this.setState({ [targetInputType]: targetInputValue, errMsg: "" });
  };

  handleSubmit = event => {
    event.preventDefault();

    let submittedNameValue = this.state.name;
    let submittedPassValue = this.state.pass;
    if (
      submittedNameValue.toLowerCase() === this.props.userName &&
      submittedPassValue === this.props.password
    ) {
      this.setState({
        successMsg: "Log In Successfully!",
        loginStatus: true
      });
    } else {
      this.setState({
        errMsg: "Error! Please, check your correct name and password!"
      });
    }
  };

  handleShowSignUp = () => {
    this.setState({
      showSignUp: true
    });
  };

  render() {
    if (!this.state.loginStatus) {
      if (!this.state.showSignUp) {
        return (
          <div className="">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="login">
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="inner-wrap">
                    <label>
                      name
                      <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label>
                      password
                      <input
                        type="password"
                        name="pass"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <p style={{ color: "red" }}>{this.state.errMsg}</p>
                    <p style={{ color: "red" }}>{this.state.successMsg}</p>
                  </div>
                  <div className="button-section">
                    <input
                      style={{ float: "left" }}
                      type="submit"
                      name="login"
                      value="Login"
                    />
                    <input
                      type="button"
                      name="signup"
                      value="Sign Up"
                      style={{ float: "right" }}
                      onClick={this.handleShowSignUp}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      } else {
        return <SignUp />;
      }
    } else {
      return <Home name={this.state.name} />;
    }
  }
}

export default Login;
