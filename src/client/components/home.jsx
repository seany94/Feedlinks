import React from 'react';

import Homecss from '../styles/home.scss'
import Cookies from 'js-cookie';

import Addfeed from '../components/addfeed';

const axios = require('axios');

const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Home extends React.Component {
    constructor() {
        super();
        this.searchChangeHandler = this.searchChangeHandler.bind( this );
        this.addfeedClickHandler = this.addfeedClickHandler.bind( this );
        this.state = {
            name: "",
            photo_url: "",
            feed: [],
            category: [],
            search: "",
            feed_add: false
        };
    }

    componentDidMount(){
        var that = this;
        var userCookie = Cookies.get('user');
        if(document.body.querySelector('div.modal-backdrop') != null){
            document.body.removeChild(document.body.querySelector('div.modal-backdrop'));
            // console.log(userCookie)
            axios.get(`/user/${userCookie}`)
              .then(function (response) {
                that.setState({name: response.data[0].name, photo_url: response.data[0].photo_url});
              })
            axios.get(`/user/${userCookie}/feed`)
              .then(function (response) {
                var feedArr = [];
                var counter = 0;
                for(let i = 0; i < response.data.length; i++){
                    parser.parseURL(CORS_PROXY + response.data[i].feed_url, function(err, feed) {
                      feed.items.forEach(function(entry) {
                        // console.log(entry)

                        feedArr.push([feed.title, entry.title, entry.link, entry.pubDate]);
                      })
                        counter++;
                        if(counter == response.data.length){
                            that.setState({feed: feedArr});
                        }
                    })
                }
              })
              axios.get(`/user/${userCookie}/category`)
              .then(function (response) {
                that.setState({category: response.data});
              })
        }
        else{
            axios.get(`/user/${userCookie}`)
              .then(function (response) {
                that.setState({name: response.data[0].name, photo_url: response.data[0].photo_url});
              })
            axios.get(`/user/${userCookie}/feed`)
              .then(function (response) {
                var feedArr = [];
                var counter = 0;
                for(let i = 0; i < response.data.length; i++){
                    parser.parseURL(CORS_PROXY + response.data[i].feed_url, function(err, feed) {
                      feed.items.forEach(function(entry) {
                        // console.log(entry)

                        feedArr.push([feed.title, entry.title, entry.link, entry.pubDate]);
                      })
                        counter++;
                        if(counter == response.data.length){
                            that.setState({feed: feedArr});
                        }
                    })
                }
              })
              axios.get(`/user/${userCookie}/category`)
              .then(function (response) {
                that.setState({category: response.data});
              })
        }
    }

    searchChangeHandler(event){
        // console.log(event.target.value)
        this.setState({search: event.target.value});
    }

    addfeedClickHandler(event){
        this.componentDidMount();
        this.setState({feed_add: true});
    }

    render() {
        // console.log(this.state.feed)
        // console.log(this.state.category)
        const categories = this.state.category.map(tab => {return <Category list={tab}></Category>});
        const feeds = this.state.feed.map(link => {return <Feed list={link}></Feed>});

    return (
      <div>
        <h1 className="text-center">Welcome to FeedLinks {this.state.name} <img className="rounded-circle" src={this.state.photo_url} width="55px" height="55px"/>!
        <button type="button" onClick={this.props.signout} className={Homecss.signout}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
        </h1>
        <div className="row">
            <div className="col-2">
                <div className="modal fade" id="addFeed" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Add Feed</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body" id="modal-addfeed">
                        <Addfeed addfeed={this.addfeedClickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
              <button type="button" className={Homecss.button} data-toggle="modal" data-target="#addFeed"><i className="fa fa-plus"></i>&nbsp; &nbsp;Feed &nbsp; &nbsp; &nbsp;</button>
              <button type="button" className={Homecss.button} data-toggle="modal" data-target="#addCat"><i className="fa fa-plus"></i> Category&nbsp;</button>
              <br/>
              <div>
                  {categories}
              </div>
            </div>
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <div className={Homecss.searchbar}>
                      <input className={Homecss.search_input} onChange={this.searchChangeHandler} type="text" placeholder="Enter Title of Feed"/>
                      <a className={Homecss.search_icon}><i className="fas fa-search"></i></a>
                    </div>
                </div>
                <div className={Homecss.content} id="feed">
                    <img src="https://i.redd.it/ad27atzy1zxz.gif" alt="" id="loading" width="920px"/>
                    {feeds}
                </div>
            </div>
            <div className="col-2">
              <button type="button" className={Homecss.button} data-toggle="collapse" href="#news" role="button" aria-expanded="false" aria-controls="news">News Sites</button>
              <div className="collapse" id="news">
                <div className="card card-body">
                  AsiaOne
                  <br/>
                  Abc
                  <br/>
                  BBC
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

class Category extends React.Component{
    render(){
        // console.log(this.props.list)
        return(
            <div className={Homecss.list}>
                {this.props.list.title}
            </div>
            );
    }
}

class Feed extends React.Component{

    componentDidMount(){
        if(document.body.querySelector('#loading') != null){
            document.body.querySelector('#feed').removeChild(document.body.querySelector('#loading'))
        }
        else{
            return;
        }
    }

    render(){
        // console.log(this.props.list[0])
        var str = this.props.list[1];
        var re = str.replace(/&#039;/g, "\'");
        return(
            <div>
                <div className="card mt-1">
                  <div className="card-header">
                    {this.props.list[0]}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{re}</h5>
                    <p className="card-text">{this.props.list[2]}</p>
                    <p className="card-text"><small className="text-muted">{this.props.list[3]}</small></p>
                  </div>
                </div>
            </div>
            );
    }
}

export default Home;