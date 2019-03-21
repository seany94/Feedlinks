import React from 'react';

import { withRouter } from 'react-router-dom';

const axios = require('axios');

class Editcategory extends React.Component {
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
          $('#editCat').keypress(function(e){
            if(e.which == 13) {
              $('#editCat').modal('toggle');
              that.clickHandler();
            }
          })
        })
    }

    catChangeHandler(event){
        // console.log(event.target.value)
        this.setState({category: event.target.value});
    }

    clickHandler(title, id){
        this.props.editcategory(title, id)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div className="form-group">
                    <label><i className="fas fa-link"></i> Title*</label>
                    <input onChange={this.catChangeHandler} type="text" name="feed" value={this.state.category} className="form-control" placeholder="Enter Category Title" />
                </div>
                <button type="button" onClick={() => {this.clickHandler(this.state.category, this.props.title)}} className="btn btn-primary mr-2" id="editCat" data-dismiss="modal">Edit</button>
                <span></span>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        );
    }
}

export default withRouter(Editcategory);