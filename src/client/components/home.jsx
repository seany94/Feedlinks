import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount(){
        document.body.removeChild(document.body.querySelector('div.modal-backdrop'))
    }

    render() {
    return (
      <div>
        <h1>HI</h1>
      </div>
    );
  }
}

export default Home;