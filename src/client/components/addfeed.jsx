import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');
const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Addfeed extends React.Component {
    constructor() {
    super();
    this.feedChangeHandler = this.feedChangeHandler.bind( this );
    this.selectChangeHandler = this.selectChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.state = {
        feed_url: "",
        select: ""
    };
  }

    componentDidMount(){
        var that = this;
        $(function(){
          $('#addFeed').keypress(function(e){
            if(e.which == 13) {
              $('#addFeed').modal('toggle');
              that.clickHandler();
            }
          })
        })
    }

    feedChangeHandler(event){
        // console.log(event.target.value)
        this.setState({feed_url: event.target.value});
    }

    selectChangeHandler(event){
        this.setState({select: event.target.value});
    }

    clickHandler(){
        var that = this;
        if(this.state.select == ""){
            alertify.error('Error not a valid category. Please try again.');
        }
        else{
            parser.parseURL(CORS_PROXY + this.state.feed_url, function(err, feed) {
            if(err != null){
                alertify.error('Error not a valid RSS Feed. Please try again.');
            }
            else{
                axios.post('/feed/add', {
                    feed_url: that.state.feed_url,
                    option: that.state.select
                  })
                  .then(function (response) {
                    that.props.addfeed(that.state.select);
                  })
            }
        })
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Feed Link*</label>
                    <input onChange={this.feedChangeHandler} type="text" name="feed" value={this.state.feed_url} className="form-control" placeholder="Enter Feed URL" />
                </div>
                <div className="form-group">
                    <label>Add to Category</label>
                    <select className="form-control" id="catselect" onChange={this.selectChangeHandler}>
                    </select>
                </div>
                <div className="alert alert-danger alert-dismissible fade show text-justify" role="alert">
                  <strong>Disclaimer: </strong>Adding new feed takes time to proccess but do not worry, a notification will pop up to inform you that the feed has been added as well as the page re-rendered so do not be alarm.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="addFeed" data-dismiss="modal">Add</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Addfeed);