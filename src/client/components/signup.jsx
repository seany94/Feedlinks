import React from 'react';

const axios = require('axios');

class Signup extends React.Component {
    constructor() {
    super();
    this.emailChangeHandler = this.emailChangeHandler.bind( this );
    this.usernameChangeHandler = this.usernameChangeHandler.bind( this );
    this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

    emailChangeHandler(event){
        this.setState({email: event.target.value});
    }

    usernameChangeHandler(event){
        this.setState({username: event.target.value});
    }

    passwordChangeHandler(event){
        this.setState({password: event.target.value});
    }


    clickHandler(email, username, password){
        // console.log(email, username, password)
    }

    render() {
        return (
            <div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" onChange={this.emailChangeHandler} value={this.state.email} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="password" onChange={this.usernameChangeHandler} value={this.state.username} className="form-control" placeholder="Enter Username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input onChange={this.passwordChangeHandler} value={this.state.password} className="form-control" placeholder="Enter Password" />
              </div>
              <button onClick={() => {this.clickHandler(this.state.email, this.state.username, this.state.password)}} className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default Signup;