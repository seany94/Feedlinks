import React from 'react';

import Cookies from 'js-cookie';

import Homecss from '../styles/home.scss'

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

    this.state = {
      feed_links: [],
    };
  }

    componentDidMount(){
      this.setState({feed_links: this.props.list.feed_url})
    }

    componentWillReceiveProps(){
      this.setState({feed_links: this.props.list.feed_url})
    }

    render() {
      // console.log(this.state.feed_links)

        return (
            <div className={Homecss.link}>
              {this.state.feed_links}
              <span> </span>
              <a onClick={() => {this.props.delete(this.state.feed_links)}}>
                  <i className="far fa-trash-alt"></i>
              </a>
              <span> </span>
              <a data-toggle="modal" data-target={"#editFeed" + this.state.feed_links}>
                  <i className="far fa-edit"></i>
              </a>
            </div>
        );
    }
}

export default Feedcounter;