import React from "react";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  async signup(e) {
    e.preventDefault();
    await this.props.signup(
      this.state.username,
      this.state.email,
      this.state.password
    );
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeUserName(event) {
    const value = event.target.value;
    this.setState({ username: value });
  }

  handleChangeEmail(event) {
    const value = event.target.value;
    this.setState({ email: value });
  }

  handleChangePassword(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  render() {
    if (this.props.token) {
      return <Navigate to="/preferences" />;
    }
    return (
      <main className="sign-up-main">
        &nbsp;
        <div>
          <div className="sign-up-form">
            <h2>Create Account</h2>
            <form onSubmit={this.signup}>
              <li>
                <input
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
                  className="form-inputs-sign-up"
                  type="text"
                  placeholder="username"
                />
              </li>
              <li>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  className="form-inputs-sign-up"
                  type="email"
                  placeholder="email"
                />
              </li>
              <li>
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  className="form-inputs-sign-up"
                  type="password"
                  placeholder="password"
                />
              </li>
              <li>
                {" "}
                <button className="form-button"> SIGN UP </button>
              </li>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default CreateAccountForm;
