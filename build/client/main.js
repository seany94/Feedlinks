!function(e){function t(t){for(var n,l,c=t[0],i=t[1],s=t[2],u=0,m=[];u<c.length;u++)l=c[u],r[l]&&m.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;o.push([224,1]),a()}({224:function(e,t,a){e.exports=a(588)},548:function(e,t){},550:function(e,t){},572:function(e,t){},588:function(e,t,a){"use strict";a.r(t),a(225),a(427),a(611);var n=a(0),r=a.n(n),o=a(221),l=a.n(o),c=a(590),i=a(616),s=a.n(i),d=a(618),u=a.n(d),m=a(39),f=a.n(m),p=a(591);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=a(44),C=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=b(t).call(this))||"object"!==y(a)&&"function"!=typeof a?g(this):a).feedChangeHandler=e.feedChangeHandler.bind(g(e)),e.selectChangeHandler=e.selectChangeHandler.bind(g(e)),e.clickHandler=e.clickHandler.bind(g(e)),e.state={feed_url:"",select:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),a=t,(n=[{key:"feedChangeHandler",value:function(e){this.setState({feed_url:e.target.value})}},{key:"selectChangeHandler",value:function(e){this.setState({select:e.target.value})}},{key:"clickHandler",value:function(){var e=this;E.post("/feed/add",{feed_url:this.state.feed_url,option:this.state.select}).then(function(t){e.setState({feed_url:"",select:""}),e.props.addfeed()})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-link"})," Feed Link*"),r.a.createElement("input",{onChange:this.feedChangeHandler,type:"text",name:"feed",value:this.state.feed_url,className:"form-control",placeholder:"Enter Feed URL"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Add to Category"),r.a.createElement("select",{className:"form-control",id:"catselect",onChange:this.selectChangeHandler})),r.a.createElement("button",{type:"button",onClick:this.clickHandler,className:"btn btn-primary mr-2",id:"addFeed","data-dismiss":"modal"},"Add"),r.a.createElement("span",null),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))}}])&&h(a.prototype,n),t}(),k=Object(p.a)(C);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=a(44),x=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=_(t).call(this))||"object"!==w(a)&&"function"!=typeof a?S(this):a).catChangeHandler=e.catChangeHandler.bind(S(e)),e.clickHandler=e.clickHandler.bind(S(e)),e.state={category:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,r.a.Component),a=t,(n=[{key:"catChangeHandler",value:function(e){this.setState({category:e.target.value})}},{key:"clickHandler",value:function(){var e=this;O.post("/category/add",{category:this.state.category}).then(function(t){e.setState({category:""}),e.props.addcategory()})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-link"})," Title*"),r.a.createElement("input",{onChange:this.catChangeHandler,type:"text",name:"feed",value:this.state.category,className:"form-control",placeholder:"Enter Category Title"})),r.a.createElement("button",{type:"button",onClick:this.clickHandler,className:"btn btn-primary mr-2",id:"addCat","data-dismiss":"modal"},"Add"),r.a.createElement("span",null),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))}}])&&N(a.prototype,n),t}(),j=Object(p.a)(x);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a(44);var A=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=T(t).call(this))||"object"!==P(a)&&"function"!=typeof a?L(this):a).catChangeHandler=e.catChangeHandler.bind(L(e)),e.clickHandler=e.clickHandler.bind(L(e)),e.state={category:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r.a.Component),a=t,(n=[{key:"catChangeHandler",value:function(e){this.setState({category:e.target.value})}},{key:"clickHandler",value:function(e,t){this.props.editcategory(e,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-link"})," Title*"),r.a.createElement("input",{onChange:this.catChangeHandler,type:"text",name:"feed",value:this.state.category,className:"form-control",placeholder:"Enter Category Title"})),r.a.createElement("button",{type:"button",onClick:function(){e.clickHandler(e.state.category,e.props.title)},className:"btn btn-primary mr-2",id:"editCat","data-dismiss":"modal"},"Edit"),r.a.createElement("span",null),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))}}])&&q(a.prototype,n),t}(),F=Object(p.a)(A);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a(44);var I=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,D(t).call(this))).state={},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},this.props.link,r.a.createElement("br",null),r.a.createElement("iframe",{width:"630px",height:"620px",src:this.props.link}))}}])&&R(a.prototype,n),t}();function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t,a){return t&&J(e.prototype,t),a&&J(e,a),e}function K(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?V(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}Object(p.a)(I);var Y=a(44),Z=new(a(541)),$="https://cors-anywhere.herokuapp.com/",ee=function(e){function t(){var e;return W(this,t),(e=K(this,Q(t).call(this))).searchChangeHandler=e.searchChangeHandler.bind(V(e)),e.addfeedClickHandler=e.addfeedClickHandler.bind(V(e)),e.optionfeedClickHandler=e.optionfeedClickHandler.bind(V(e)),e.addcategoryClickHandler=e.addcategoryClickHandler.bind(V(e)),e.delcategoryClickHandler=e.delcategoryClickHandler.bind(V(e)),e.editcategoryClickHandler=e.editcategoryClickHandler.bind(V(e)),e.unsortedcategoryClickHandler=e.unsortedcategoryClickHandler.bind(V(e)),e.sortedcategoryClickHandler=e.sortedcategoryClickHandler.bind(V(e)),e.state={name:"",photo_url:"",feed:[],category:[],search:"",feed_add:!1,category_add:!1,category_del:!1,category_edit:!1},e}return X(t,r.a.Component),G(t,[{key:"componentDidMount",value:function(){var e=this,t=f.a.get("user");null!=document.body.querySelector("div.modal-backdrop")?(document.body.removeChild(document.body.querySelector("div.modal-backdrop")),Y.get("/user/".concat(t)).then(function(t){e.setState({name:t.data[0].name,photo_url:t.data[0].photo_url})}),Y.get("/user/".concat(t,"/feed")).then(function(t){for(var a=[],n=0,r=0;r<t.data.length;r++)Z.parseURL($+t.data[r].feed_url,function(r,o){o.items.forEach(function(e){a.push({title:o.title,news:e.title,link:e.link,date:e.pubDate})}),++n==t.data.length&&e.setState({feed:a})})}),Y.get("/user/".concat(t,"/category")).then(function(t){e.setState({category:t.data})})):(Y.get("/user/".concat(t)).then(function(t){e.setState({name:t.data[0].name,photo_url:t.data[0].photo_url})}),Y.get("/user/".concat(t,"/feed")).then(function(t){for(var a=[],n=0,r=0;r<t.data.length;r++)Z.parseURL($+t.data[r].feed_url,function(r,o){o.items.forEach(function(e){a.push({title:o.title,news:e.title,link:e.link,date:e.pubDate})}),++n==t.data.length&&e.setState({feed:a})})}),Y.get("/user/".concat(t,"/category")).then(function(t){e.setState({category:t.data})}))}},{key:"searchChangeHandler",value:function(e){for(var t=Array.from(document.querySelectorAll(".card")),a=document.querySelector("#search").value.toLowerCase(),n=0;n<t.length;n++)t[n].textContent.toLowerCase().indexOf(a)>-1?t[n].style.display="":t[n].style.display="none"}},{key:"addfeedClickHandler",value:function(e){this.componentDidMount(),this.setState({feed_add:!0})}},{key:"addcategoryClickHandler",value:function(e){this.componentDidMount(),this.setState({category_add:!0})}},{key:"delcategoryClickHandler",value:function(e){var t=this;Y.delete("/category/delete",{data:{title:e.title}}).then(function(e){t.componentDidMount(),t.setState({category_del:!0})})}},{key:"editcategoryClickHandler",value:function(e,t){var a=this,n=f.a.get("user");Y.put("/category/edit/".concat(n),{title:e,name:t}).then(function(e){a.componentDidMount(),a.setState({category_edit:!0})})}},{key:"optionfeedClickHandler",value:function(e){if(null==document.body.querySelector("option")){(r=document.createElement("option")).innerHTML="Choose category to add into",document.body.querySelector("#catselect").appendChild(r),(o=document.createElement("option")).innerHTML="Unsorted",document.body.querySelector("#catselect").appendChild(o);for(var t=0;t<this.state.category.length;t++){var a=document.createElement("option"),n=this.state.category[t].title;a.setAttribute("value",this.state.category[t].id),a.innerHTML=n,document.body.querySelector("#catselect").appendChild(a)}}else{for(;document.body.querySelector("#catselect").firstChild;)document.body.querySelector("#catselect").removeChild(document.body.querySelector("#catselect").firstChild);var r,o;(r=document.createElement("option")).innerHTML="Choose category to add into",document.body.querySelector("#catselect").appendChild(r),(o=document.createElement("option")).innerHTML="Unsorted",document.body.querySelector("#catselect").appendChild(o);for(var l=0;l<this.state.category.length;l++)a=document.createElement("option"),n=this.state.category[l].title,a.setAttribute("value",this.state.category[l].id),a.innerHTML=n,document.body.querySelector("#catselect").appendChild(a)}}},{key:"unsortedcategoryClickHandler",value:function(e){var t=this,a=f.a.get("user");Y.post("/category/".concat(a,"/").concat(e),{title:e}).then(function(e){if(e.data.length>0)for(var a=[],n=0,r=0;r<e.data.length;r++)Z.parseURL($+e.data[r].feed_url,function(r,o){o.items.forEach(function(e){a.push({title:o.title,news:e.title,link:e.link,date:e.pubDate})}),++n==e.data.length&&t.setState({feed:a})});else t.setState({feed:[]})})}},{key:"sortedcategoryClickHandler",value:function(e){var t=this,a=f.a.get("user");Y.post("/category/".concat(a,"/").concat(e),{title:e}).then(function(e){if(e.data.length>0)for(var a=[],n=0,r=0;r<e.data.length;r++)Z.parseURL($+e.data[r].feed_url,function(r,o){o.items.forEach(function(e){a.push({title:o.title,news:e.title,link:e.link,date:e.pubDate})}),++n==e.data.length&&t.setState({feed:a})});else t.setState({feed:[]})})}},{key:"render",value:function(){var e=this,t=this.state.category.map(function(t){return r.a.createElement(te,{list:t,delete:e.delcategoryClickHandler,edit:e.editcategoryClickHandler,sort:e.sortedcategoryClickHandler})}),a=this.state.feed.map(function(e){return r.a.createElement(ae,{list:e})});return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Welcome to FeedLinks ",this.state.name," ",r.a.createElement("img",{className:"rounded-circle",src:this.state.photo_url,width:"55px",height:"55px"}),"!",r.a.createElement("button",{type:"button",onClick:this.props.signout,className:u.a.signout},r.a.createElement("i",{className:"fas fa-sign-out-alt"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"modal fade",id:"addFeed",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fas fa-rss-square"})," Add Feed"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"modal-body",id:"modal-addfeed"},r.a.createElement(k,{addfeed:this.addfeedClickHandler}))))),r.a.createElement("div",{className:"modal fade",id:"addCat",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fas fa-rss-square"})," Add Category"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"modal-body",id:"modal-addfeed"},r.a.createElement(j,{addcategory:this.addcategoryClickHandler}))))),r.a.createElement("button",{type:"button",onClick:this.optionfeedClickHandler,className:u.a.button,"data-toggle":"modal","data-target":"#addFeed"},r.a.createElement("i",{className:"fa fa-plus"}),"   Feed      "),r.a.createElement("button",{type:"button",className:u.a.button,"data-toggle":"modal","data-target":"#addCat"},r.a.createElement("i",{className:"fa fa-plus"})," Category "),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:u.a.list},r.a.createElement("a",{onClick:function(){return e.unsortedcategoryClickHandler("unsorted")}},"Unsorted")),t)),r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:u.a.searchbar},r.a.createElement("input",{className:u.a.search_input,onChange:this.searchChangeHandler,id:"search",type:"text",placeholder:"Enter Title of Feed"}),r.a.createElement("a",{className:u.a.search_icon},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:u.a.content,id:"feed"},r.a.createElement("img",{src:"https://i.redd.it/ad27atzy1zxz.gif",alt:"",id:"loading",width:"920px"}),a)),r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{type:"button",className:u.a.button,"data-toggle":"collapse",href:"#news",role:"button","aria-expanded":"false","aria-controls":"news"},"News Sites"),r.a.createElement("div",{className:"collapse",id:"news"},r.a.createElement("div",{className:"card card-body text-right"},r.a.createElement("a",{href:"https://www.bbc.com/news/10628494",target:"_blank"},"BBC"),r.a.createElement("a",{href:"https://www.channelnewsasia.com/news/rss",target:"_blank"},"Channel NewsAsia"),r.a.createElement("a",{href:"http://www.chinadaily.com.cn/rss/index.html",target:"_blank"},"China Daily"),r.a.createElement("a",{href:"https://www.washingtonpost.com/discussions/2018/10/12/washington-post-rss-feeds/?noredirect=on&utm_term=.0199cfea8cd8",target:"_blank"},"The Washington Post"),r.a.createElement("a",{href:"https://www.dailytelegraph.com.au/help-rss",target:"_blank"},"Daily Telegraph"))))))}}]),t}(),te=function(e){function t(){var e;return W(this,t),(e=K(this,Q(t).call(this))).clickHandler=e.clickHandler.bind(V(e)),e.state={},e}return X(t,r.a.Component),G(t,[{key:"clickHandler",value:function(e,t){this.props.edit(e,t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade",id:"editFeed"+this.props.list.title,tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fas fa-rss-square"})," Edit Feed Title"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"modal-body",id:"modal-editfeed"},r.a.createElement(F,{title:this.props.list.title,editcategory:this.clickHandler}))))),r.a.createElement("div",{className:u.a.list},r.a.createElement("a",{onClick:function(){return e.props.sort(e.props.list.id)}},this.props.list.title),r.a.createElement("span",null," "),r.a.createElement("a",{onClick:function(){e.props.delete(e.props.list)}},r.a.createElement("i",{className:"far fa-trash-alt",id:"del"})),r.a.createElement("a",{"data-toggle":"modal","data-target":"#editFeed"+this.props.list.title},r.a.createElement("i",{className:"far fa-edit"}))))}}]),t}(),ae=function(e){function t(){var e;return W(this,t),(e=K(this,Q(t).call(this))).clickHandler=e.clickHandler.bind(V(e)),e.state={},e}return X(t,r.a.Component),G(t,[{key:"componentDidMount",value:function(){null!=document.body.querySelector("#loading")&&document.body.querySelector("#feed").removeChild(document.body.querySelector("#loading"))}},{key:"clickHandler",value:function(e){var t,a;null==document.body.querySelector("iframe")&&null==document.body.querySelector("#url-link")?((t=document.createElement("p")).innerHTML=e,t.setAttribute("class","alert alert-success"),t.setAttribute("id","url-link"),document.body.querySelector("#url").appendChild(t),(a=document.createElement("IFRAME")).setAttribute("src","".concat(e)),a.setAttribute("width","100%"),a.setAttribute("height","580px"),document.body.querySelector("#feedframe").appendChild(a)):(document.body.querySelector("#feedframe").removeChild(document.body.querySelector("iframe")),document.body.querySelector("#url").removeChild(document.body.querySelector("#url-link")),(t=document.createElement("p")).innerHTML=e,t.setAttribute("class","alert alert-success"),t.setAttribute("id","url-link"),document.body.querySelector("#url").appendChild(t),(a=document.createElement("IFRAME")).setAttribute("src","".concat(e)),a.setAttribute("width","100%"),a.setAttribute("height","580px"),document.body.querySelector("#feedframe").appendChild(a))}},{key:"render",value:function(){var e=this,t=this.props.list.news.replace(/&#039;/g,"'");return r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade bd-example-modal-xl",id:"feedurl",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-xl",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fas fa-rss-square"})," News Feed"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"text-center",id:"url"},r.a.createElement("div",{className:"modal-body d-flex justify-content-center",id:"feedframe"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))),r.a.createElement("a",{onClick:function(){return e.clickHandler(e.props.list.link)},"data-toggle":"modal","data-target":"#feedurl"},r.a.createElement("div",{className:"card mt-1"},r.a.createElement("div",{className:"card-header"},this.props.list.title),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},this.props.list.link),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},this.props.list.date))))))}}]),t}(),ne=ee;function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se=a(44),de=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=le(t).call(this))||"object"!==re(a)&&"function"!=typeof a?ce(this):a).usernameChangeHandler=e.usernameChangeHandler.bind(ce(e)),e.passwordChangeHandler=e.passwordChangeHandler.bind(ce(e)),e.clickHandler=e.clickHandler.bind(ce(e)),e.state={username:"",password:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(t,r.a.Component),a=t,(n=[{key:"usernameChangeHandler",value:function(e){this.setState({username:e.target.value})}},{key:"passwordChangeHandler",value:function(e){this.setState({password:e.target.value})}},{key:"clickHandler",value:function(){var e=this;se.post("/user/login",{username:this.state.username,password:this.state.password}).then(function(t){var a=e.props.login;if("object"==re(t.data))a(t.data[0]);else if("error"==t.data){var n=document.createElement("div");n.textContent="Unrecognized login credentials",n.setAttribute("id","text"),n.setAttribute("class","alert alert-danger");var r=document.querySelector("div#modal-login");if(null!=r.querySelector("#text"))return;null!=r.querySelector("#text2")?(r.removeChild(r.querySelector("#text2")),r.insertBefore(n,r.firstChild)):r.insertBefore(n,r.firstChild)}else if("wrong password"==t.data){var o=document.createElement("div");o.textContent="Wrong Password",o.setAttribute("id","text2"),o.setAttribute("class","alert alert-danger");var l=document.querySelector("div#modal-login");if(null!=l.querySelector("#text2"))return;null!=l.querySelector("#text")?(l.removeChild(l.querySelector("#text")),l.insertBefore(o,l.firstChild)):l.insertBefore(o,l.firstChild)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-user"})," Username"),r.a.createElement("input",{onChange:this.usernameChangeHandler,type:"username",name:"username",className:"form-control",placeholder:"Enter Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-key"})," Password"),r.a.createElement("input",{onChange:this.passwordChangeHandler,type:"password",name:"password",className:"form-control",placeholder:"Enter Password"})),r.a.createElement("button",{type:"button",onClick:this.clickHandler,className:"btn btn-primary mr-2",id:"login"},"Login"),r.a.createElement("span",null),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))}}])&&oe(a.prototype,n),t}(),ue=Object(p.a)(de);function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var be=a(44),ge=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=pe(t).call(this))||"object"!==me(a)&&"function"!=typeof a?ye(this):a).nameChangeHandler=e.nameChangeHandler.bind(ye(e)),e.photoChangeHandler=e.photoChangeHandler.bind(ye(e)),e.usernameChangeHandler=e.usernameChangeHandler.bind(ye(e)),e.passwordChangeHandler=e.passwordChangeHandler.bind(ye(e)),e.clickHandler=e.clickHandler.bind(ye(e)),e.state={name:"",photo_url:"",username:"",password:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,r.a.Component),a=t,(n=[{key:"nameChangeHandler",value:function(e){this.setState({name:e.target.value})}},{key:"photoChangeHandler",value:function(e){this.setState({photo_url:e.target.value})}},{key:"usernameChangeHandler",value:function(e){this.setState({username:e.target.value})}},{key:"passwordChangeHandler",value:function(e){this.setState({password:e.target.value})}},{key:"clickHandler",value:function(){if(""==this.state.name||""==this.state.username||""==this.state.password){var e=document.createElement("div");e.textContent="Fill in all required fields in asterisk *",e.setAttribute("id","text"),e.setAttribute("class","alert alert-danger");var t=document.querySelector("div#modal-signup");if(null!=t.querySelector("#text"))return;null!=t.querySelector("#text2")?(t.removeChild(t.querySelector("#text2")),t.insertBefore(e,t.firstChild)):t.insertBefore(e,t.firstChild)}else{var a=this;be.post("/user/signup",{name:this.state.name,photo:this.state.photo_url,username:this.state.username,password:this.state.password}).then(function(e){if("object"==me(e.data))(0,a.props.signup)(e.data,a.state.password);else if("error"==e.data){var t=document.createElement("div");t.textContent="Name/Username exists",t.setAttribute("id","text2"),t.setAttribute("class","alert alert-danger");var n=document.querySelector("div#modal-signup");if(null!=n.querySelector("#text2"))return;null!=n.querySelector("#text")?(n.removeChild(n.querySelector("#text")),n.insertBefore(t,n.firstChild)):n.insertBefore(t,n.firstChild)}})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-signature"})," Name*"),r.a.createElement("input",{onChange:this.nameChangeHandler,type:"name",name:"name",className:"form-control",placeholder:"Enter name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-image"})," Photo"),r.a.createElement("input",{onChange:this.photoChangeHandler,type:"photo",name:"photo",className:"form-control",placeholder:"Enter photo link"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-user"})," Username*"),r.a.createElement("input",{onChange:this.usernameChangeHandler,type:"username",name:"username",className:"form-control",placeholder:"Enter Username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("i",{className:"fas fa-key"})," Password*"),r.a.createElement("input",{onChange:this.passwordChangeHandler,type:"password",name:"password",className:"form-control",placeholder:"Enter Password"})),r.a.createElement("button",{type:"button",onClick:this.clickHandler,className:"btn btn-primary mr-2",id:"signup"},"Signup"),r.a.createElement("span",null),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))}}])&&fe(a.prototype,n),t}(),ve=Object(p.a)(ge);function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ce(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _e=a(44),Se=function(e){function t(){var e,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(e=!(a=ke(t).call(this))||"object"!==Ee(a)&&"function"!=typeof a?we(this):a).clickHandler=e.clickHandler.bind(we(e)),e.signoutClickHandler=e.signoutClickHandler.bind(we(e)),e.state={name:"",photo_url:""},e}var a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(t,r.a.Component),a=t,(n=[{key:"clickHandler",value:function(e,t){var a=this;_e.post("/user/login",{username:e[2],password:t}).then(function(t){a.setState({name:e[0],photo_url:e[1]})})}},{key:"signoutClickHandler",value:function(e){f.a.remove("loggedin"),f.a.remove("user"),this.setState({name:"",photo_url:""})}},{key:"render",value:function(){return"true"!=f.a.get("loggedin")?r.a.createElement("div",null,r.a.createElement("div",{className:"modal fade",id:"login",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fa fa-lock"})," Login"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"modal-body",id:"modal-login"},r.a.createElement(ue,{login:this.clickHandler}))))),r.a.createElement("div",{className:"modal fade",id:"signup",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},r.a.createElement("i",{className:"fas fa-user-plus"})," Sign-Up"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×"))),r.a.createElement("div",{className:"modal-body",id:"modal-signup"},r.a.createElement(ve,{signup:this.clickHandler}))))),r.a.createElement("div",{className:s.a.landing},r.a.createElement("h1",{className:"text-center"},"Welcome to FeedLinks!"),r.a.createElement("div",{className:s.a.splash},r.a.createElement("button",{type:"button",className:s.a.button,"data-toggle":"modal","data-target":"#login"},"  Login  "),r.a.createElement("button",{type:"button",className:s.a.button,"data-toggle":"modal","data-target":"#signup"},"Sign-Up")))):"true"==f.a.get("loggedin")?r.a.createElement("div",null,r.a.createElement(ne,{signout:this.signoutClickHandler})):void 0}}])&&Ce(a.prototype,n),t}();a(620),l.a.render(r.a.createElement(c.a,null,r.a.createElement(Se,null)),document.getElementById("app"))},616:function(e,t){e.exports={landing:"landing_landing_f4259",splash:"landing_splash_6ee9e",button:"landing_button_f245c"}},618:function(e,t){e.exports={searchbar:"home_searchbar_be73d",search_input:"home_search_input_54099",search_icon:"home_search_icon_f7a1e",button:"home_button_6363f",signout:"home_signout_cdaca",list:"home_list_eca40",content:"home_content_c2e4a"}},620:function(e,t){}});