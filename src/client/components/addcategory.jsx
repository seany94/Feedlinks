import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Addcategory extends React.Component {
    constructor() {
    super();
    this.catChangeHandler = this.catChangeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );

    this.state = {
        category: "",
    };
  }

    componentDidMount(){
        var that = this;
        $(function(){
          $('#addCat').keypress(function(e){
            if(e.which == 13) {
              $('#addCat').modal('toggle');
              that.clickHandler();
            }
          })
        })
    }

    catChangeHandler(event){
        // console.log(event.target.value)
        this.setState({category: event.target.value});
    }

    clickHandler(){
        var that = this;
        axios.post('/category/add', {
            category: this.state.category
          })
          .then(function (response) {
            that.setState({category: ""});
            that.props.addcategory();
          })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Title*</label>
                    <input onChange={this.catChangeHandler} type="text" name="feed" value={this.state.category} className="form-control" placeholder="Enter Category Title" />
                </div>
                <button type="button" onClick={this.clickHandler} className="btn btn-primary mr-2" id="addCat" data-dismiss="modal">Add</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Addcategory);