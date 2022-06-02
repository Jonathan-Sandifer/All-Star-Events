import React from 'react'


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
        <div className="col-1">
          <h2>Log in</h2>
          
          <form id ='form' className='flex flex-col'>
           
            <input type="text" placeholder='username or email'/>
            <input type="text" placeholder='password'/>
            <button className="btn">Log In</button>
            
          </form>
        </div>
      </div>
    </section>
  );
}
}

export default LoginForm; 
