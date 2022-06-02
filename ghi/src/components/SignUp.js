import React from 'react'


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
        <div className="col-1">
          <h2>Create Account</h2>
          
          <form id ='form' className='newAccount'>
            <input type="text" placeholder='username'/>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password'/>
            <button className="btn">Create New Account</button>
          </form>
        </div>
      </div>
    </section>
  );
}
}

export default CreateAccountForm; 


