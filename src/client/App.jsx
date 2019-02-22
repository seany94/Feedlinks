import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link } from "react-router-dom";

import Home from './components/home';
import Login from './components/login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        login: false
    };
  }

  render() {
    if(this.state.login == false){
        return (
          <div>
            <h1 className="text-center">Welcome to FeedLinks!</h1>
            <form method="POST" action="/user">
              <div className="form-group">
                <label>Username</label>
                <input type="username" name="username" className="form-control" placeholder="Enter Username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter Password" />
              </div>
              <button className="btn btn-primary">Login</button>
              <button type="button" className="btn btn-secondary btn-lg">Sign up</button>
            </form>
            <Route
              path='/signup'
              render={() => (
                <Login/>
              )}
            />

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