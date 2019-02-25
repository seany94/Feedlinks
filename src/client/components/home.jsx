import React from 'react';

import Homecss from '../styles/home.scss'
import Cookies from 'js-cookie';

const axios = require('axios');

const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Home extends React.Component {
    constructor() {
        super();
        this.searchChangeHandler = this.searchChangeHandler.bind( this );
        this.state = {
            name: "",
            photo_url: "",
            feed: [],
            category: [],
            search: ""
        };
    }

    componentDidMount(){
        if(document.body.querySelector('div.modal-backdrop') != null){
            document.body.removeChild(document.body.querySelector('div.modal-backdrop'));
            var that = this;
            var userCookie = Cookies.get('user');
            // console.log(userCookie)
            axios.get(`/user/${userCookie}`)
              .then(function (response) {
                that.setState({name: response.data[0].name, photo_url: response.data[0].photo_url});
              })
            axios.get(`/user/${userCookie}/feed`)
              .then(function (response) {
                that.setState({feed: response.data});
              })
              axios.get(`/user/${userCookie}/category`)
              .then(function (response) {
                that.setState({category: response.data});
              })
        }
        else{
            var that = this;
            var userCookie = Cookies.get('user');
            axios.get(`/user/${userCookie}`)
              .then(function (response) {
                that.setState({name: response.data[0].name, photo_url: response.data[0].photo_url});
              })
            axios.get(`/user/${userCookie}/feed`)
              .then(function (response) {
                var feedArr = [];
                for(let i = 0; i < response.data.length; i++){
                    parser.parseURL(CORS_PROXY + response.data[i].feed_url, function(err, feed) {
                      feed.items.forEach(function(entry) {
                        feedArr.push([feed.title, entry.title, entry.link]);
                      })
                    })
                }
                that.setState({feed: feedArr});
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

    render() {
        console.log(this.state.feed)
        // console.log(this.state.category)
        const categories = this.state.category.map(tab => {return <Category list={tab}></Category>});
        // const feeds = this.state.feed.map(link => {return <Feed list={link}></Feed>});

    return (
      <div>
        <h1 className="text-center">Welcome to FeedLinks {this.state.name} <img className="rounded-circle" src={this.state.photo_url} width="55px" height="55px"/>!</h1>
        <div className="row">
            <div className="col-2">
              <button type="button" className={Homecss.button} data-toggle="modal" data-target="#addFeed">&nbsp;Add Feed&nbsp;</button>
              <button type="button" className={Homecss.button} data-toggle="modal" data-target="#addCat">Add Category</button>
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

// class Feed extends React.Component{
//     render(){
//         console.log(this.props.list)
//         return(
//             <div>
//                 {this.props.list}
//             </div>
//             );
//     }
// }

export default Home;