import React from 'react'
import Footer from './Footer';


class CreateAccountForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_name: "",
      email: "",
      password:""
    };
    // may need state with empty list after password ?

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChangeUserName = this.handleUserName.bind(this);
    // this.handleChangeEmail = this.handleUserName.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  render(){
  return (
    <main className="sign-up-main">&nbsp;
      <div>
        <div className="sign-up-form">
          <h2>Create Account</h2>
          <form>
            <li><input className="form-inputs" type="text" placeholder='username'/></li>
            <li><input className="form-inputs" type="text" placeholder='email'/></li>
            <li><input className="form-inputs" type="text" placeholder='password'/></li>
            <li><button className="form-button">Create New Account</button></li>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
}

export default CreateAccountForm; 

