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
        var that = this;

        axios.post('/user/signup', {
            name: this.state.name,
            photo: this.state.photo_url,
            username: this.state.username,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response.data)
            if(typeof(response.data) == "object"){
                var signup = that.props.signup;
                signup(response.data[0]);
            }
            else if(response.data == "error"){
                alert("Name/Username exists")
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
                    <label><i class="fas fa-signature"></i> Name</label>
                    <input onChange={this.nameChangeHandler} type="name" name="name" className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label><i class="fas fa-image"></i> Photo</label>
                    <input onChange={this.photoChangeHandler} type="photo" name="photo" className="form-control" placeholder="Enter photo link" />
                </div>
                <div className="form-group">
                    <label><i class="fas fa-user"></i> Username</label>
                    <input onChange={this.usernameChangeHandler} type="username" name="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label><i class="fas fa-key"></i> Password</label>
                    <input onChange={this.passwordChangeHandler} type="password" name="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" data-dismiss="modal">Signup</button>
                <span></span>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Signup);