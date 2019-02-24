import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Splashcss from './styles/landing.scss'
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

import Cookies from 'js-cookie';
const axios = require('axios');

class App extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind( this );
        this.state = {
            name: "",
            photo_url: "",
        };
    }

  // componentDidMount(){
  //   axios.get('/user')
  //     .then(function (response) {
  //       console.log(typeof(response));
  //       if(typeof(response) == object){
  //           console.log("hi")
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
    clickHandler(event){
        // console.log(event.name)
        this.setState({name: event.name, photo_url: event.photo_url});
    }

    render() {
        if(Cookies.get('loggedin') != "true"){
            return (
              <div>
                <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-lock"></i> Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <Login login={this.clickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-user-plus"></i> Sign-Up</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
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
                <h1 className="text-center">Welcome to FeedLinks!</h1>
                <Home />

              </div>
            );
        }
    }
}

export default hot(module)(App);