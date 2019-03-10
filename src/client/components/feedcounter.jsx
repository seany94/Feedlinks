import React from 'react';

import Homecss from '../styles/home.scss'

const axios = require('axios');

class Feedcounter extends React.Component {
    constructor() {
    super();

    this.state = {
    };
  }

    render() {
        // console.log(this.props)
        return (
            <div>
              <button type="button" className={Homecss.button}>Feed Counter</button>
            </div>
        );
    }
}

export default Feedcounter;