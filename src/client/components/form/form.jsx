import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind( this );
    this.clickHandler = this.clickHandler.bind( this );
    this.sortHandler = this.sortHandler.bind( this );
    this.cartHandler = this.cartHandler.bind( this );
    this.removeHandler = this.removeHandler.bind( this );
    this.state = {
        word : "",
        search : "",
        list : [],
        cart : [],
        price : [],
        subTotal : 0,
        gst : 0,
        totalPrice : 0,
        validation: false
    };
}

    changeHandler(event){
        if(event.target.value.length > 9){
            alert("WARNING ERROR!! INPUT TOO LONG!!!")
        }
        else if(event.target.value.length < 0){
            this.setState({validation: false});
        }
        else if(event.target.value.length > 0){
            this.setState({validation: true});
        }
        this.setState({search: event.target.value});
    }

    clickHandler(event){
        // console.log(event.target.value)
        if(this.state.validation == true){
            var that = this;
            that.setState({word: event.target.value});

            // what to do when we recieve the request
            var responseHandler = function() {
              const data = JSON.parse(this.responseText);
              // console.log(data.items)
              that.setState({search: "", list: data.items});
              // console.log(this.responseText)
            };

            // make a new request
            var request = new XMLHttpRequest();

            // listen for the request response
            request.addEventListener("load", responseHandler);

            // ready the system by calling open, and specifying the url
            request.open("GET", `http://127.0.0.1:3000/query?search=${event.target.value}`);

            // send the request
            request.send();
        }
        else if(this.state.validation == false){
            alert("Input field empty!")
        }

    }

    sortHandler(event){
        // console.log(event.target.value)
        if(event.target.value == 1){
            function compare(a,b) {
              if (a.salePrice < b.salePrice)
                return -1;
              if (a.salePrice > b.salePrice)
                return 1;
              return 0;
            }
            var sort = this.state.list.sort(compare);
            this.setState({list: sort});
        }
        else if(event.target.value == 2){
            function compare(a,b) {
              if (a.salePrice > b.salePrice)
                return -1;
              if (a.salePrice < b.salePrice)
                return 1;
              return 0;
            }
            var sort = this.state.list.sort(compare);
            this.setState({list: sort});
        }
        else if(event.target.value == 3){
            function compare(a,b) {
              if (a.name < b.name)
                return -1;
              if (a.name > b.name)
                return 1;
              return 0;
            }
            var sort = this.state.list.sort(compare);
            this.setState({list: sort});
        }
    }

    cartHandler(name, amt){
        // console.log(name, amt)
        var cart = {
            name: name,
            price: amt
        }
        this.setState({cart: [cart, ...this.state.cart], price: [amt, ...this.state.price]},function calculate(){
                const sum = this.state.price.reduce((total, a) => total + a);
                const tax = sum * 0.07;
                const total = sum + tax + 7
                this.setState({subTotal: sum.toFixed(2), gst: tax.toFixed(2), totalPrice: total.toFixed(2)});
            });
    }

    removeHandler(name, amt){
        // console.log(name, amt)
        console.log(this.state.price.length)
        for(let i = 0; i < this.state.cart.length; i++){
            var elementName = this.state.cart.indexOf(name)
            if(this.state.cart[i].name.includes(name) == true){
                var cartArray = this.state.cart.slice();
                cartArray.splice(elementName, 1);
                this.setState({cart: cartArray});
            }
        }
        if(this.state.price.length > 1){
            for(let j = 0; j < this.state.price.length; j++){
                var elementAmt = this.state.price.indexOf(amt)
                var amtArray = this.state.price.slice();
                amtArray.splice(elementAmt, 1);
                this.setState({price: amtArray},function calculate(){
                const sum = this.state.price.reduce((total, a) => total + a);
                const tax = sum * 0.07;
                const total = sum + tax + 7
                this.setState({subTotal: sum.toFixed(2), gst: tax.toFixed(2), totalPrice: total.toFixed(2)});
                });
            }
        }
        else if(this.state.price.length < 2){
            this.setState({price: [], subTotal: 0, gst: 0, totalPrice: 0});
        }
    }

    render() {
        // console.log(this.state.list)

        const items = this.state.list.map(item => {return <Item item={item} add={this.cartHandler}></Item>})
        const cartItems = this.state.cart.map(item => {return <Cart item={item} remove={this.removeHandler}></Cart>})
        return (
          <div>
          <br/>
              <input onChange={this.changeHandler} value={this.state.search} maxlength="10"/>
              <button onClick={this.clickHandler} value={this.state.search}>search</button>
                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModal" ><i class="fas fa-shopping-cart"></i> Cart</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        {cartItems}
                        Sub total: ${this.state.subTotal}
                        <br/>
                        Shipping Fee: $7
                        <br/>
                        GST: ${this.state.gst}(7%)
                        <br/>
                        <strong>Total Price: ${this.state.totalPrice}</strong>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Procceed Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              <h3>List of search result related to {this.state.word}</h3>
              <ul>
                <select className="custom-select" onChange={this.sortHandler}>
                    <option selected>Sort Options</option>
                    <option value="1">Price ascending</option>
                    <option value="2">Price descending</option>
                    <option value="3">Name ascending</option>
                </select>
                {items}
              </ul>
          </div>
          );
    }
}

class Cart extends React.Component{
    render(){
        // console.log(this.props.item)
        return(
            <div>
                <ul>
                    <strong>Name:</strong> {this.props.item.name}
                    <br/>
                    <strong>Price:</strong> ${this.props.item.price}
                    <button onClick={() => {this.props.remove(this.props.item.name, this.props.item.price)}}>remove item</button>
                </ul>
            </div>
        );
    }
}

class Item extends React.Component{
    render() {
        // console.log(this.props.item.salePrice)
        if(this.props.item.stock == "Available"){
            return (
                <div>
                    <div className="card">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={this.props.item.mediumImage}/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{this.props.item.name}</h5>
                            <p className="card-text">{this.props.item.shortDescription}</p>
                            <p className="card-text"><small className="text-muted">Price: ${this.props.item.salePrice} Availability: Available <button onClick={() => {this.props.add(this.props.item.name, this.props.item.salePrice)}}>Add item to cart</button></small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                    </div>
                </div>
              );
        }
        else{
            return (
            <div>
                <div className="card">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={this.props.item.mediumImage}/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">{this.props.item.shortDescription}</p>
                        <p className="card-text"><small className="text-muted">Price: ${this.props.item.salePrice} Availability: Not Available</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                </div>
            </div>
          );
        }
    }
}

export default Form;