import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Addfeed extends React.Component {
    constructor() {
    super();
    this.feedChangeHandler = this.feedChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
        feed_url: "",
    };
  }

    feedChangeHandler(event){
        console.log(event.target.value)
        this.setState({feed_url: event.target.value});
    }

    clickHandler(){
        axios.post('/feed/add', {
            feed_url: this.state.feed_url
          })
          .then(function (response) {
            window.location.reload();
          })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Feed Link*</label>
                    <input onChange={this.feedChangeHandler} type="text" name="feed" value={this.state.feed_url} className="form-control" placeholder="Enter Feed URL" />
                </div>
                <div className="form-group">
                    <label>Add to Category</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="addFeed">Add</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Addfeed);