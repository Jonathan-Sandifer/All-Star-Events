import React from 'react'
import Footer from './Footer';


class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_name: "",
      password:""
    };
    // may need state with empty list after password ?

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeUserName = this.handleUserName.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  render(){
  return (
    <main className="login-main">&nbsp;
      <div >
        <div className="log-in-form">
          <h2>Log in</h2>
          <form>
          <li><input className="form-inputs" type="text" placeholder='username or email'/></li>
          <li><input className="form-inputs" type="text" placeholder='password'/></li>
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
