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
    <section>
      <div className="register">
        <div>
          <h2>Create Account</h2>
          
          <form id ='form' className='form'>
            <li><input type="text" placeholder='username'/></li>
            <li><input type="text" placeholder='email'/></li>
            <li><input type="text" placeholder='password'/></li>
            <li><button className="btn">Create New Account</button></li>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
}

export default CreateAccountForm; 


