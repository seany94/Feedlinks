import React from 'react';

import Cookies from 'js-cookie';

import Homecss from '../styles/home.scss'
import Editfeed from '../components/editfeed';

const axios = require('axios');

class Feedcounter extends React.Component {
    constructor() {
    super();
    this.delFeedClickHandler = this.delFeedClickHandler.bind( this );
    this.editFeedClickHandler = this.editFeedClickHandler.bind( this );

    this.state = {
      feedcounter: [],
      completed: false,
      feed_del: false,
      feed_edit: false
    };
  }

    componentDidMount(){
        var that = this;
        var userCookie = Cookies.get('user');
        axios.get(`/user/${userCookie}/feed/counter`)
        .then(function (response) {
          that.setState({feedcounter: response.data});
        })
        .then(function (response) {
          that.setState({completed: true});
        })
    }

    delFeedClickHandler(feed){
        var that = this;
        axios.delete('/feed/delete', {
            data: { feed_url: feed }
          })
        .then(response => {
          that.componentDidMount();
          that.setState({feed_del: true});
        });
    }

    editFeedClickHandler(feed, link){
        // var that = this;
        // var userCookie = Cookies.get('user');
        // axios.put(`/feed/edit/${userCookie}`, {
        //     title: category,
        //     name: title
        //   })
        //   .then(response => {
        //     that.componentDidMount();
        //     that.setState({feed_edit: true});
        //   });
    }

    render() {
        // console.log(this.state.completed)
        var count = this.state.feedcounter.length;
        if(this.state.completed == true){
          // console.log(this.state.feedcounter, "HI")
          const counter = this.state.feedcounter.map(link => {return <Counter list={link} delete={this.delFeedClickHandler} edit={this.editFeedClickHandler} ></Counter>});

          return (
              <div>
                <div className="modal fade" id="feed_counter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Feed Links</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body" id="modal-feedcounter">
                          {counter}
                          <div className="alert alert-danger alert-dismissible fade show text-justify" role="alert">
                          <strong>Instruction: </strong>Please click the empty area below the modal if you want to dismiss the second pop up modal. Currently the close button close all modals.
                          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <button type="button" className={Homecss.button} onClick={this.optionfeedClickHandler} data-toggle="modal" data-target="#feed_counter">Feed Counter: {count}</button>
              </div>
          );
        }
        else{
          return (
              <div>
                <button type="button" className={Homecss.button} onClick={this.optionfeedClickHandler} data-toggle="modal" data-target="#feed_counter">Feed Counter {count}</button>
              </div>
          );
        }
    }
}

class Counter extends React.Component {
    constructor() {
    super();
    this.clickHandler = this.clickHandler.bind( this );
    this.editHandler = this.editHandler.bind( this );

    this.state = {
      feed_links: [],
      feed_id: [],
    };
  }

    componentDidMount(){
      this.setState({feed_links: this.props.list.feed_url, feed_id: this.props.list.id})
    }

    componentWillReceiveProps(){
      this.setState({feed_links: this.props.list.feed_url, feed_id: this.props.list.id})
    }

    editHandler(feed){
      $(feed).modal({
          backdrop: false,
          show: true
      })
    }

    clickHandler(feed, url){
        this.props.edit(feed, url)
    }

    render() {
      // console.log(this.state.feed_id)
      const modal = {
          color: 'black',
          textAlign: 'left',
          marginTop: '350px'
      }

        return (
            <div className={Homecss.link}>
              <div className="modal fade" id={"editFeed" + this.state.feed_id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={modal}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Edit Feed Link ({this.state.feed_links})</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" id="modal-editfeed">
                      <Editfeed feed_url={this.state.feed_links} feed_id={this.state.feed_id} editfeed={this.clickHandler}/>
                    </div>
                  </div>
                </div>
              </div>
              {this.state.feed_links}
              <span> </span>
              <a onClick={() => {this.props.delete(this.state.feed_links)}}>
                  <i className="far fa-trash-alt"></i>
              </a>
              <span> </span>
              <a onClick={() => {this.editHandler('#editFeed' + this.state.feed_id)}}>
                  <i className="far fa-edit"></i>
              </a>
            </div>
        );
    }
}

export default Feedcounter;