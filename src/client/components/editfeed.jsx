import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

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
        var that = this;
        parser.parseURL(CORS_PROXY + this.state.feed_link, function(err, feed) {
            if(err != null){
                alertify.error('Error not a valid RSS Feed. Please try again.');
            }
            else{
                that.props.editfeed(link, id)
            }
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Feed Link*</label>
                    <input onChange={this.feedChangeHandler} type="text" name="feed" value={this.state.feed_link} className="form-control" placeholder="Enter Feed Link" />
                </div>
                <button type="button" onClick={() => {this.clickHandler(this.state.feed_link, this.props.feed_id)}} className="btn btn-primary mr-2" id="editFeedLinks" data-dismiss="modal">Edit</button>
                <span></span>
                <button type="button" className="btn btn-secondary" onClick={() => {this.props.closefeed('#editFeed' + this.props.feed_id)}}>Close</button>
            </div>
        );
    }
}

export default withRouter(Editfeed);