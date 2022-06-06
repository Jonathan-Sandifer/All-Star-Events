import React from 'react'
import Footer from './Footer';
import { Navigate } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.login = this.login.bind(this);
    // may need state with empty list after password ?

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeUserName = this.handleUserName.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  async login(e) {
    e.preventDefault();
    await this.props.login(this.state.username, this.state.password);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    if (this.props.token) {
      return <Navigate to="/" />;
    }
  return (
    <main className="login-main">&nbsp;
      <div >
        <div className="log-in-form">
          <h2>Log in</h2>
          <form onSubmit={this.login}>
          <li><input name="username"  value={this.state.username} onChange={this.handleInput} className="form-inputs-login" type="text" placeholder='username'/></li>
          <li><input  name="password"  value={this.state.password} onChange={this.handleInput} className="form-inputs-login" type="password" placeholder='password'/></li>
          <li> <button className="form-button">  Log In  </button></li>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
}

export default LoginForm;
