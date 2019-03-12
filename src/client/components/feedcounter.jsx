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
      feed_edit: false,
      updated: false
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

    componentWillReceiveProps(){
        this.componentDidMount()
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

    editFeedClickHandler(link, id){
        var that = this;
        var userCookie = Cookies.get('user');
        axios.put(`/feed/edit/${userCookie}`, {
            feed_url: link,
            feed_id: id
          })
          .then(response => {
            that.componentDidMount();
            that.setState({feed_edit: true});
            alertify.success('Successfully edited RSS feed');
          });
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
                          <h6 className="text-center">Total RSS Feeds saved {count}</h6>
                          <div className={Homecss.feed_links}>{counter}</div>
                          <br />
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
    this.editModalHandler = this.editModalHandler.bind( this );
    this.closeModalHandler = this.closeModalHandler.bind( this );

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

    editModalHandler(feed){
      $(feed).modal({
          backdrop: false,
          show: true
      })
    }

    closeModalHandler(feed){
      $(feed).modal('hide')
    }

    clickHandler(link, id){
        this.props.edit(link, id)
    }

    render() {
      // console.log(this.state.feed_id)
      const modal = {
          color: 'black',
          textAlign: 'left',
          marginTop: '460px'
      }

      const font = {
          fontSize: '12px'
      }

        return (
            <div className={Homecss.link}>
              <div className="modal fade" id={"editFeed" + this.state.feed_id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={modal}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Edit Feed Link ({this.state.feed_links})</h5>
                      <button type="button" className="close" onClick={() => {this.closeModalHandler('#editFeed' + this.state.feed_id)}} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" id="modal-editfeed">
                      <Editfeed feed_url={this.state.feed_links} feed_id={this.state.feed_id} editfeed={this.clickHandler} closefeed={this.closeModalHandler}/>
                    </div>
                  </div>
                </div>
              </div>
              <div style={font}>
                {this.state.feed_links}
                <span> </span>
                <a onClick={() => {this.props.delete(this.state.feed_links)}}>
                    <i className="far fa-trash-alt"></i>
                </a>
                <span> </span>
                <a onClick={() => {this.editModalHandler('#editFeed' + this.state.feed_id)}}>
                    <i className="far fa-edit"></i>
                </a>
              </div>
            </div>
        );
    }
}

export default Feedcounter;