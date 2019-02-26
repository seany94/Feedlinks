import React from 'react';
import { hot } from 'react-hot-loader';
// import { Route, Link, Switch, Redirect } from "react-router-dom";

import Splashcss from './styles/landing.scss'
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

import Cookies from 'js-cookie';
// const axios = require('axios');

class App extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind( this );
        this.signoutClickHandler = this.signoutClickHandler.bind( this );
        this.state = {
            name: "",
            photo_url: "",
        };
    }

    clickHandler(event){
        // console.log(event)
        this.setState({name: event.name, photo_url: event.photo_url});
    }

    signoutClickHandler(event){
        // console.log(event)
        Cookies.remove('loggedin');
        Cookies.remove('user');
        this.setState({name: "", photo_url: ""});
    }

    render() {
        if(Cookies.get('loggedin') != "true"){
            return (
              <div>
                <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fa fa-lock"></i> Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body" id="modal-login">
                        <Login login={this.clickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-user-plus"></i> Sign-Up</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body" id="modal-signup">
                        <Signup signup={this.clickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={Splashcss.landing}>
                    <h1 className="text-center">Welcome to FeedLinks!</h1>
                    <div className={Splashcss.splash}>
                        <button type="button" className={Splashcss.button} data-toggle="modal" data-target="#login">&nbsp; Login &nbsp;</button>
                        <button type="button" className={Splashcss.button} data-toggle="modal" data-target="#signup">Sign-Up</button>
                    </div>
                </div>
              </div>
            );
        }
        else if(Cookies.get('loggedin') == "true"){
            return (
              <div>
                <Home signout={this.signoutClickHandler}/>
              </div>
            );
        }
    }
}

export default hot(module)(App);