import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to Walmart!</h1>
        <Form />

      </div>
    );
  }
}

export default hot(module)(App);