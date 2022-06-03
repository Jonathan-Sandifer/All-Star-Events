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
    <section>
      <div className="register">
        <div>
          <h2>Log in</h2>
          
          <form id ='form' className='form'>
          <li><input type="text" placeholder='username or email'/></li>
          <li><input type="text" placeholder='password'/></li>
          <li> <button className="btn">  Log In  </button></li>
          </form>
        </div>
      </div>
    </section>
  );
}
}

export default LoginForm; 
