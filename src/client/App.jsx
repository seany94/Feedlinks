import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from './components/home';
import Login from './components/login';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        login: false,
    };
  }

  // componentDidMount(){
  //   axios.get('/user')
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  render() {
    if(this.state.login == false){
        return (
          <div>
            <Switch>
                <Route path="/" component={Login}/>
            </Switch>
          </div>
        );
    }
    else if(this.state.login == true){
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