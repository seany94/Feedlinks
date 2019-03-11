import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Editfeed extends React.Component {
    constructor() {
    super();
    this.feedChangeHandler = this.feedChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
        feed_link: "",
    };
  }

    feedChangeHandler(event){
        // console.log(this.props)
        this.setState({feed_link: event.target.value});
    }

    clickHandler(link, id){
        this.props.editfeed(link, id)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Feed Link*</label>
                    <input onChange={this.feedChangeHandler} type="text" name="feed" value={this.state.feed_link} className="form-control" placeholder="Enter Feed Link" />
                </div>
                <button type="button" onClick={() => {this.clickHandler(this.state.feed_link, this.props.feed_id)}} className="btn btn-primary mr-2" id="editCat" data-dismiss="modal">Edit</button>
                <span></span>
                <button type="button" className="btn btn-secondary" onClick={() => {this.props.closefeed('#editFeed' + this.props.feed_id)}}>Close</button>
            </div>
        );
    }
}

export default withRouter(Editfeed);