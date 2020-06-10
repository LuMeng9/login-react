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
      confirmPassword: ""
    };
  }

  handleChange = event => {
    let targetInputType = event.target.name;
    let targetInputValue = event.target.value;
    this.setState({
      [targetInputType]: targetInputValue
    });

    // if (targetInputType === "confirmPassword") {
    //   event.key === "Enter" ? console.log("Enter") : console.log("no Enter");
    // }
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      showPageLabel: "login"
    });

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        err: <p style={{ color: "red" }}>Please check your confirm password</p>
      });
    } else {
      this.props.onCreate(this.state, this.state.showPageLabel);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
      });
      this.setState({
        err: ""
      });
    }
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
                value={this.state.firstName}
                required
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={this.state.lastName}
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
                value={this.state.email}
                required
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
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
                value={this.state.password}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                // onKeyPress={event =>
                //   event.key === "Enter"
                //     ? this.props.showLoginPage
                //     : console.log("no Enter")
                // }
                onChange={this.handleChange}
                required
              />
              {this.state.err}
            </label>
          </div>
          <div className="button-section">
            <input type="submit" value="Register" />
            <input
              style={{ float: "right" }}
              type="button"
              value="Login"
              onClick={this.props.showLoginPage}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
