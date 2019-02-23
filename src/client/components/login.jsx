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
        console.log(this.state.username, this.state.password)
        const URL = `http://localhost:5432/user`;

        axios(URL, {
           method: 'POST',
           data: {
            username: this.state.username,
            password: this.state.password
           }
         })
           .then(response => response.data)
           .catch(error => {
             throw error;
           });
        // axios.post('/user', {
        //     username: this.state.username,
        //     password: this.state.password
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Welcome to FeedLinks!</h1>
                <div className="form-group">
                    <label>Username</label>
                    <input onChange={this.usernameChangeHandler} type="username" name="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.passwordChangeHandler} type="password" name="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary">Login</button>
            </div>
        );
    }
}

export default withRouter(Login);