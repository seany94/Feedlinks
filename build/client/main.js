!function(e){function t(t){for(var r,i,o=t[0],c=t[1],s=t[2],m=0,p=[];m<o.length;m++)i=o[m],n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={0:0},l=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=c;l.push([156,1]),a()}({156:function(e,t,a){e.exports=a(452)},452:function(e,t,a){"use strict";a.r(t),a(157),a(359),a(455);var r=a(1),n=a.n(r),l=a(155),i=a.n(l);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,a){return t&&u(e.prototype,t),a&&u(e,a),e}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}var b=function(e){function t(){var e;return s(this,t),(e=p(this,d(t).call(this))).changeHandler=e.changeHandler.bind(f(e)),e.clickHandler=e.clickHandler.bind(f(e)),e.sortHandler=e.sortHandler.bind(f(e)),e.cartHandler=e.cartHandler.bind(f(e)),e.removeHandler=e.removeHandler.bind(f(e)),e.state={word:"",search:"",list:[],cart:[],price:[],subTotal:0,gst:0,totalPrice:0,validation:!1},e}return h(t,n.a.Component),m(t,[{key:"changeHandler",value:function(e){9<e.target.value.length?alert("WARNING ERROR!! INPUT TOO LONG!!!"):e.target.value.length<0?this.setState({validation:!1}):0<e.target.value.length&&this.setState({validation:!0}),this.setState({search:e.target.value})}},{key:"clickHandler",value:function(e){if(1==this.state.validation){var t=this;t.setState({word:e.target.value});var a=new XMLHttpRequest;a.addEventListener("load",function(){var e=JSON.parse(this.responseText);t.setState({search:"",list:e.items})}),a.open("GET","http://127.0.0.1:3000/query?search=".concat(e.target.value)),a.send()}else 0==this.state.validation&&alert("Input field empty!")}},{key:"sortHandler",value:function(e){if(1==e.target.value){var t=this.state.list.sort(function(e,t){return e.salePrice<t.salePrice?-1:e.salePrice>t.salePrice?1:0});this.setState({list:t})}else 2==e.target.value?(t=this.state.list.sort(function(e,t){return e.salePrice>t.salePrice?-1:e.salePrice<t.salePrice?1:0}),this.setState({list:t})):3==e.target.value&&(t=this.state.list.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}),this.setState({list:t}))}},{key:"cartHandler",value:function(e,t){var a={name:e,price:t};this.setState({cart:[a].concat(c(this.state.cart)),price:[t].concat(c(this.state.price))},function(){var e=this.state.price.reduce(function(e,t){return e+t}),t=.07*e,a=e+t+7;this.setState({subTotal:e.toFixed(2),gst:t.toFixed(2),totalPrice:a.toFixed(2)})})}},{key:"removeHandler",value:function(e,t){console.log(this.state.price.length);for(var a=0;a<this.state.cart.length;a++){var r=this.state.cart.indexOf(e);if(1==this.state.cart[a].name.includes(e)){var n=this.state.cart.slice();n.splice(r,1),this.setState({cart:n})}}if(1<this.state.price.length)for(var l=0;l<this.state.price.length;l++){var i=this.state.price.indexOf(t),o=this.state.price.slice();o.splice(i,1),this.setState({price:o},function(){var e=this.state.price.reduce(function(e,t){return e+t}),t=.07*e,a=e+t+7;this.setState({subTotal:e.toFixed(2),gst:t.toFixed(2),totalPrice:a.toFixed(2)})})}else this.state.price.length<2&&this.setState({price:[],subTotal:0,gst:0,totalPrice:0})}},{key:"render",value:function(){var e=this,t=this.state.list.map(function(t){return n.a.createElement(y,{item:t,add:e.cartHandler})}),a=this.state.cart.map(function(t){return n.a.createElement(v,{item:t,remove:e.removeHandler})});return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("input",{onChange:this.changeHandler,value:this.state.search,maxlength:"10"}),n.a.createElement("button",{onClick:this.clickHandler,value:this.state.search},"search"),n.a.createElement("button",{type:"button",class:"btn btn-primary float-right","data-toggle":"modal","data-target":"#exampleModal"},n.a.createElement("i",{class:"fas fa-shopping-cart"})," Cart"),n.a.createElement("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog",role:"document"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Cart"),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"×"))),n.a.createElement("div",{class:"modal-body"},a,"Sub total: $",this.state.subTotal,n.a.createElement("br",null),"Shipping Fee: $7",n.a.createElement("br",null),"GST: $",this.state.gst,"(7%)",n.a.createElement("br",null),n.a.createElement("strong",null,"Total Price: $",this.state.totalPrice)),n.a.createElement("div",{class:"modal-footer"},n.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),n.a.createElement("button",{type:"button",class:"btn btn-primary"},"Procceed Checkout"))))),n.a.createElement("h3",null,"List of search result related to ",this.state.word),n.a.createElement("ul",null,n.a.createElement("select",{className:"custom-select",onChange:this.sortHandler},n.a.createElement("option",{selected:!0},"Sort Options"),n.a.createElement("option",{value:"1"},"Price ascending"),n.a.createElement("option",{value:"2"},"Price descending"),n.a.createElement("option",{value:"3"},"Name ascending")),t))}}]),t}(),v=function(e){function t(){return s(this,t),p(this,d(t).apply(this,arguments))}return h(t,n.a.Component),m(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("strong",null,"Name:")," ",this.props.item.name,n.a.createElement("br",null),n.a.createElement("strong",null,"Price:")," $",this.props.item.price,n.a.createElement("button",{onClick:function(){e.props.remove(e.props.item.name,e.props.item.price)}},"remove item")))}}]),t}(),y=function(e){function t(){return s(this,t),p(this,d(t).apply(this,arguments))}return h(t,n.a.Component),m(t,[{key:"render",value:function(){var e=this;return"Available"==this.props.item.stock?n.a.createElement("div",null,n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:this.props.item.mediumImage})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},this.props.item.name),n.a.createElement("p",{className:"card-text"},this.props.item.shortDescription),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"Price: $",this.props.item.salePrice," Availability: Available ",n.a.createElement("button",{onClick:function(){e.props.add(e.props.item.name,e.props.item.salePrice)}},"Add item to cart"))))))),n.a.createElement("div",null)):n.a.createElement("div",null,n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:this.props.item.mediumImage})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},this.props.item.name),n.a.createElement("p",{className:"card-text"},this.props.item.shortDescription),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},"Price: $",this.props.item.salePrice," Availability: Not Available")))))),n.a.createElement("div",null))}}]),t}(),g=b;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,O(t).call(this))).state={message:"hello"},e}var a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,n.a.Component),a=t,(r=[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome to Walmart! Anime Slider :D"),n.a.createElement(g,null))}}])&&P(a.prototype,r),t}();i.a.render(n.a.createElement(w,null),document.getElementById("app"))}});