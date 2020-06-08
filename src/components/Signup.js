import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      signUpFalg: false
    };
  }

  handleChange = event => {
    let targetInputType = event.target.name;
    let targetInputValue = event.target.value;
    this.setState({
      [targetInputType]: targetInputValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      signUpFalg: true
    });
    console.log("handleSubmit");
  };

  render() {
    return (
      <div className="login">
        <h1>
          Sign Up Now!
          <span>Sign up and tell us what you think of the site!</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="section">
            <span>1</span>Full Name
          </div>
          <div className="inner-wrap">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div className="section">
            <span>2</span>Email & Phone
          </div>
          <div className="inner-wrap">
            <label>
              Email Address
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>

          <div className="section">
            <span>3</span>Passwords
          </div>
          <div className="inner-wrap">
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="button-section">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
