import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Signup extends React.Component {
    constructor() {
    super();
    this.nameChangeHandler = this.nameChangeHandler.bind( this );
    this.photoChangeHandler = this.photoChangeHandler.bind( this );
    this.usernameChangeHandler = this.usernameChangeHandler.bind( this );
    this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
        name: "",
        photo_url: "",
        username: "",
        password: "",
    };
  }

    nameChangeHandler(event){
        this.setState({name: event.target.value});
    }

    photoChangeHandler(event){
        this.setState({photo_url: event.target.value});
    }

    usernameChangeHandler(event){
        this.setState({username: event.target.value});
    }

    passwordChangeHandler(event){
        this.setState({password: event.target.value});
    }

    clickHandler(){
        if(this.state.name == "" || this.state.username == "" || this.state.password == ""){
                var div = document.createElement("div")
                div.textContent = "Fill in all required fields in asterisk *"
                div.setAttribute("id", "text");
                div.setAttribute("class", "alert alert-danger");
                var signupBtn = document.querySelector('div#modal-signup')
                if(signupBtn.querySelector("#text") != null){
                    return;
                }
                else if(signupBtn.querySelector("#text2") != null){
                    signupBtn.removeChild(signupBtn.querySelector("#text2"))
                    signupBtn.insertBefore(div, signupBtn.firstChild)
                }
                else{
                    signupBtn.insertBefore(div, signupBtn.firstChild)
                }
        }
        else{
            var that = this;

            axios.post('/user/signup', {
                name: this.state.name,
                photo: this.state.photo_url,
                username: this.state.username,
                password: this.state.password
              })
              .then(function (response) {
                // console.log(response.data)
                if(typeof(response.data) == "object"){
                    var signup = that.props.signup;
                    signup(response.data, that.state.password);
                }
                else if(response.data == "error"){
                    var div2 = document.createElement("div")
                    div2.textContent = "Name/Username exists"
                    div2.setAttribute("id", "text2");
                    div2.setAttribute("class", "alert alert-danger");
                    var signupBtn2 = document.querySelector('div#modal-signup')
                    if(signupBtn2.querySelector("#text2") != null){
                        return;
                    }
                    else if(signupBtn2.querySelector("#text") != null){
                        signupBtn2.removeChild(signupBtn2.querySelector("#text"))
                        signupBtn2.insertBefore(div2, signupBtn2.firstChild)
                    }
                    else{
                        signupBtn2.insertBefore(div2, signupBtn2.firstChild)
                    }
                }
              })
              // .catch(function (error) {
              //   console.log(error);
              // });
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-signature"></i> Name*</label>
                    <input onChange={this.nameChangeHandler} type="name" name="name" className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-image"></i> Photo</label>
                    <input onChange={this.photoChangeHandler} type="photo" name="photo" className="form-control" placeholder="Enter photo link" />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-user"></i> Username*</label>
                    <input onChange={this.usernameChangeHandler} type="username" name="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-key"></i> Password*</label>
                    <input onChange={this.passwordChangeHandler} type="password" name="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="signup">Signup</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Signup);