import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

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

    feedChangeHandler(event){
        // console.log(event.target.value)
        this.setState({feed_url: event.target.value});
    }

    selectChangeHandler(event){
        // console.log(event.target.value)
        this.setState({select: event.target.value});
    }

    clickHandler(){
        var that = this;
        axios.post('/feed/add', {
            feed_url: this.state.feed_url,
            option: this.state.select
          })
          .then(function (response) {
            that.setState({feed_url: "", select: ""});
            that.props.addfeed();
          })
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
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="addFeed" data-dismiss="modal">Add</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Addfeed);