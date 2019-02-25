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
            const login = that.props.login;
            if(typeof(response.data) == "object"){
                login(response.data[0]);
            }
            else if(response.data == "error"){
                var div = document.createElement("div")
                div.textContent = "Unrecognized login credentials"
                div.setAttribute("id", "text");
                div.setAttribute("class", "alert alert-danger");
                var loginBtn = document.querySelector('div.modal-body')
                if(loginBtn.querySelector("#text") != null){
                    return;
                }
                else if(loginBtn.querySelector("#text2") != null){
                    loginBtn.removeChild(loginBtn.querySelector("#text2"))
                    loginBtn.insertBefore(div, loginBtn.firstChild);
                }
                else{
                    loginBtn.insertBefore(div, loginBtn.firstChild)
                }
                // login("Unrecognized login credentials")
            }
            else if(response.data == "wrong password"){
                var div2 = document.createElement("div")
                div2.textContent = "Wrong Password"
                div2.setAttribute("id", "text2");
                div2.setAttribute("class", "alert alert-danger");
                var loginBtn2 = document.querySelector('div.modal-body')
                if(loginBtn2.querySelector("#text2") != null){
                    return;
                }
                else if(loginBtn2.querySelector("#text") != null){
                    loginBtn2.removeChild(loginBtn2.querySelector("#text"))
                    loginBtn2.insertBefore(div2, loginBtn2.firstChild)
                }
                else{
                    loginBtn2.insertBefore(div2, loginBtn2.firstChild)
                }
                // login("Wrong Password")
            }
          })
          // .catch(function (error) {
          //   console.log(error);
          // });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-user"></i> Username</label>
                    <input onChange={this.usernameChangeHandler} type="username" name="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-key"></i> Password</label>
                    <input onChange={this.passwordChangeHandler} type="password" name="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="login">Login</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Login);