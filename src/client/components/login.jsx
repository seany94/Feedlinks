import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Login extends React.Component {
    constructor() {
    super();
    this.usernameChangeHandler = this.usernameChangeHandler.bind( this );
    this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
        username: "",
        password: ""
    };
  }

    usernameChangeHandler(event){
        this.setState({username: event.target.value});
    }

    passwordChangeHandler(event){
        this.setState({password: event.target.value});
    }

    clickHandler(){
        var that = this;

        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
          })
          .then(function (response) {
            if(typeof(response.data) == "object"){
                var login = that.props.login;
                login(response.data[0]);
            }
            else if(response.data == "error"){
                alert("Unrecognized login credentials")
            }
            else if(response.data == "wrong password"){
                alert("Wrong Password")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><i class="fas fa-user"></i> Username</label>
                    <input onChange={this.usernameChangeHandler} type="username" name="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label><i class="fas fa-key"></i> Password</label>
                    <input onChange={this.passwordChangeHandler} type="password" name="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" data-dismiss="modal">Login</button>
                <span></span>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Login);