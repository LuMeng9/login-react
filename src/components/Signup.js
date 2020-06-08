import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    let targetInputType = event.target.name;
    let targetInputValue = event.target.value;
    this.setState({
      [targetInputType]: targetInputValue
    });
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
                name="fn"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="ln"
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
                name="em"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="pn"
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
                name="pass"
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="conPass"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="button-section">
            <input type="submit" name="signUp" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
