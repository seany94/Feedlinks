import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Frame extends React.Component {
    constructor() {
    super();

    this.state = {
    };
  }

    render() {
        // console.log(this.props)
        return (
            <div className="text-center">
                {this.props.link}
                <br/>
                <iframe width="630px" height="620px" src={this.props.link}></iframe>
            </div>
        );
    }
}

export default withRouter(Frame);