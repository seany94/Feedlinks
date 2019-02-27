import React from 'react';

import Homecss from '../styles/home.scss'
import Cookies from 'js-cookie';

import Addfeed from '../components/addfeed';
import Addcategory from '../components/addcategory';
import Editcategory from '../components/editcategory';
import Frame from '../components/iframe';

const axios = require('axios');

const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Home extends React.Component {
    constructor() {
        super();
        this.searchChangeHandler = this.searchChangeHandler.bind( this );
        this.addfeedClickHandler = this.addfeedClickHandler.bind( this );
        this.optionfeedClickHandler = this.optionfeedClickHandler.bind( this );
        this.addcategoryClickHandler = this.addcategoryClickHandler.bind( this );
        this.delcategoryClickHandler = this.delcategoryClickHandler.bind( this );
        this.editcategoryClickHandler = this.editcategoryClickHandler.bind( this );
        this.unsortedcategoryClickHandler = this.unsortedcategoryClickHandler.bind( this );
        this.sortedcategoryClickHandler = this.sortedcategoryClickHandler.bind( this );
        this.state = {
            name: "",
            photo_url: "",
            feed: [],
            category: [],
            search: "",
            feed_add: false,
            category_add: false,
            category_del: false,
            category_edit: false
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

                        feedArr.push({title: feed.title, news: entry.title, link: entry.link, date: entry.pubDate});
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

                        feedArr.push({title: feed.title, news: entry.title, link: entry.link, date: entry.pubDate});
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
        const feeds = Array.from(document.querySelectorAll('.card'));
        let filter = document.querySelector('#search').value.toLowerCase();
        for (let i = 0; i < feeds.length; i++) {
            let txtValue = feeds[i].textContent;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                feeds[i].style.display = "";
            }
            else {
                feeds[i].style.display = "none";
            }
        }
    }

    addfeedClickHandler(event){
        this.componentDidMount();
        this.setState({feed_add: true});
    }

    addcategoryClickHandler(event){
        this.componentDidMount();
        this.setState({category_add: true});
    }

    delcategoryClickHandler(category){
        var that = this;
        axios.delete('/category/delete', {
            data: { title: category.title }
          })
          .then(response => {
            that.componentDidMount();
            that.setState({category_del: true});
          });
    }

    editcategoryClickHandler(category, title){
        var that = this;
        var userCookie = Cookies.get('user');
        axios.put(`/category/edit/${userCookie}`, {
            title: category,
            name: title
          })
          .then(response => {
            that.componentDidMount();
            that.setState({category_edit: true});
          });
    }

    optionfeedClickHandler(category){
        if(document.body.querySelector('option') == null){
            var option = document.createElement("option");
            option.innerHTML = "None"
            document.body.querySelector('#catselect').appendChild(option);
            for(let i = 0; i < this.state.category.length; i++){
                var options = document.createElement("option");
                var optionText = this.state.category[i].title
                options.setAttribute("value", i + 1)
                options.innerHTML = optionText;
                document.body.querySelector('#catselect').appendChild(options);
            }
        }
        else{
            while (document.body.querySelector('#catselect').firstChild) {
                document.body.querySelector('#catselect').removeChild(document.body.querySelector('#catselect').firstChild);
            }
            var option = document.createElement("option");
            option.innerHTML = "None"
            document.body.querySelector('#catselect').appendChild(option);
            for(let i = 0; i < this.state.category.length; i++){
                var options = document.createElement("option");
                var optionText = this.state.category[i].title
                options.setAttribute("value", i + 1)
                options.innerHTML = optionText;
                document.body.querySelector('#catselect').appendChild(options);
            }
        }
    }

    unsortedcategoryClickHandler(category){
        var that = this;
        var userCookie = Cookies.get('user');
        axios.post(`/category/${userCookie}/${category}`, {
            title: category
          })
          .then(function (response) {
            var feedArr = [];
            var counter = 0;
            for(let i = 0; i < response.data.length; i++){
                parser.parseURL(CORS_PROXY + response.data[i].feed_url, function(err, feed) {
                  feed.items.forEach(function(entry) {
                    // console.log(entry)

                    feedArr.push({title: feed.title, news: entry.title, link: entry.link, date: entry.pubDate});
                  })
                    counter++;
                    if(counter == response.data.length){
                        that.setState({feed: feedArr});
                    }
                })
            }
          })
    }

    sortedcategoryClickHandler(category){
        var that = this;
        var userCookie = Cookies.get('user');
        axios.post(`/category/${userCookie}/${category}`, {
            title: category
          })
          .then(function (response) {
            if(response.data.length > 0){
                var feedArr = [];
                var counter = 0;
                for(let i = 0; i < response.data.length; i++){
                    parser.parseURL(CORS_PROXY + response.data[i].feed_url, function(err, feed) {
                      feed.items.forEach(function(entry) {
                        // console.log(entry)

                        feedArr.push({title: feed.title, news: entry.title, link: entry.link, date: entry.pubDate});
                      })
                        counter++;
                        if(counter == response.data.length){
                            that.setState({feed: feedArr});
                        }
                    })
                }
            }
            else{
                that.setState({feed: []});
            }
          })
    }

    render() {
        // console.log(this.state.feed)
        // console.log(this.state.category)
        const categories = this.state.category.map(tab => {return <Category list={tab} delete={this.delcategoryClickHandler} edit={this.editcategoryClickHandler} sort={this.sortedcategoryClickHandler}></Category>});
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
                <div className="modal fade" id="addCat" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Add Category</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body" id="modal-addfeed">
                        <Addcategory addcategory={this.addcategoryClickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
              <button type="button" onClick={this.optionfeedClickHandler} className={Homecss.button} data-toggle="modal" data-target="#addFeed"><i className="fa fa-plus"></i>&nbsp; &nbsp;Feed &nbsp; &nbsp; &nbsp;</button>
              <button type="button" className={Homecss.button} data-toggle="modal" data-target="#addCat"><i className="fa fa-plus"></i> Category&nbsp;</button>
              <br/>
              <div>
                <div className={Homecss.list}>
                    <a onClick={() => this.unsortedcategoryClickHandler("unsorted")}>Unsorted</a>
                </div>
                  {categories}
              </div>
            </div>
            <div className="col-8">
                <div className="d-flex justify-content-center">
                    <div className={Homecss.searchbar}>
                      <input className={Homecss.search_input} onChange={this.searchChangeHandler} id="search" type="text" placeholder="Enter Title of Feed"/>
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
                <div className="card card-body text-right">
                  <a href="https://www.bbc.com/news/10628494" target="_blank">BBC</a>
                  <a href="https://www.channelnewsasia.com/news/rss" target="_blank">Channel NewsAsia</a>
                  <a href="http://www.chinadaily.com.cn/rss/index.html" target="_blank">China Daily</a>
                  <a href="https://www.washingtonpost.com/discussions/2018/10/12/washington-post-rss-feeds/?noredirect=on&utm_term=.0199cfea8cd8" target="_blank">The Washington Post</a>
                  <a href="https://www.dailytelegraph.com.au/help-rss" target="_blank">Daily Telegraph</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

class Category extends React.Component{
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind( this );
        this.state = {
        };
    }

    clickHandler(category, title){
        this.props.edit(category, title)
    }

    render(){
        // console.log(this.props.list)
        return(
            <div>
                <div className="modal fade" id={"editFeed" + this.props.list.title} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> Edit Feed Title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body" id="modal-editfeed">
                        <Editcategory title={this.props.list.title} editcategory={this.clickHandler}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={Homecss.list}>
                    <a onClick={() => this.props.sort(this.props.list.id)}>{this.props.list.title}</a>
                    <span> </span>
                    <a onClick={() => {this.props.delete(this.props.list)}}>
                        <i className="far fa-trash-alt" id="del"></i>
                    </a>
                    <a data-toggle="modal" data-target={"#editFeed" + this.props.list.title}>
                        <i className="far fa-edit"></i>
                    </a>
                </div>
            </div>
            );
    }
}

class Feed extends React.Component{
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind( this );
        this.state = {
        };
    }

    componentDidMount(){
        if(document.body.querySelector('#loading') != null){
            document.body.querySelector('#feed').removeChild(document.body.querySelector('#loading'))
        }
        else{
            return;
        }
    }

    clickHandler(link){
        if(document.body.querySelector('iframe') == null && document.body.querySelector('#url-link') == null){
            var url = document.createElement("p")
            url.innerHTML = link;
            url.setAttribute("class", "alert alert-success");
            url.setAttribute("id", "url-link");
            document.body.querySelector('#url').appendChild(url);
            var frame = document.createElement("IFRAME");
            frame.setAttribute("src", `${link}`);
            frame.setAttribute("width", "100%");
            frame.setAttribute("height", "580px");
            document.body.querySelector('#feedframe').appendChild(frame);
        }
        else{
            document.body.querySelector('#feedframe').removeChild(document.body.querySelector('iframe'));
            document.body.querySelector('#url').removeChild(document.body.querySelector('#url-link'));
            var url = document.createElement("p")
            url.innerHTML = link;
            url.setAttribute("class", "alert alert-success");
            url.setAttribute("id", "url-link");
            document.body.querySelector('#url').appendChild(url);
            var frame = document.createElement("IFRAME");
            frame.setAttribute("src", `${link}`);
            frame.setAttribute("width", "100%");
            frame.setAttribute("height", "580px");
            document.body.querySelector('#feedframe').appendChild(frame);
        }
    }

    render(){
        // console.log(this.props.list)
        var str = this.props.list.news;
        var re = str.replace(/&#039;/g, "\'");
        return(
            <div>
                <div className="modal fade bd-example-modal-xl" id="feedurl" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><i className="fas fa-rss-square"></i> News Feed</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="text-center" id="url">
                          <div className="modal-body d-flex justify-content-center" id="feedframe">
                          </div>
                      </div>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
                <a onClick={() => this.clickHandler(this.props.list.link)} data-toggle="modal" data-target="#feedurl">
                    <div className="card mt-1">
                      <div className="card-header">
                        {this.props.list.title}
                      </div>
                      <div className="card-body">
                            <h5 className="card-title">{re}</h5>
                        <p className="card-text">{this.props.list.link}</p>
                        <p className="card-text"><small className="text-muted">{this.props.list.date}</small></p>
                      </div>
                    </div>
                </a>
            </div>
            );
    }
}

export default Home;