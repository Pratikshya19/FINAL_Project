import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import CartItemList from './CartItemList';
import { ButtonContainer } from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutForm from './CheckoutForm';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = ({
            cartitems: [],
            total: 0,
            isLoaded: false

        })
    }
 

clearCart = () => {
fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items`, {
    method: "DELETE",
    headers:{
        'Authorization':`bearer ${localStorage.token}` 
     }
})

    .then(res => res.json())
    .then(data => {
        console.log("cart is cleared");
        this.setState({
            cartitems: [],
            total: 0 
    
    })
   
    })
}

removeitem = (e, id) => {
    e.preventDefault()
    // debugger
    console.log(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items/${id}`)
    fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items/${id}`,
     { method: "DELETE",
     headers:{
        'Authorization':`bearer ${localStorage.token}` 
     }
     }).then((res) => {
        console.log('Removed: ', res)
     }).then(() =>
        this.fetchItems()
     ).catch(err => {
        console.error(err)
     })
}
    

sum = () => {
    let counter = 0
    this.state.cartitems.forEach(item => counter += parseInt(item.price))
    
    this.setState({
    total: counter
        })
        console.log(counter)
    }
     

   componentDidMount(){

        this.fetchItems();
    
   }

   fetchItems = () => {
    fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items`)
    .then(res => res.json())
    .then(data => {
       console.log("my data",data)
    this.setState({
        cartitems: data.items,
        isLoaded: true
    })
    console.log(this.state.cartitems)
    }).then(this.sum)
   }
   


   render(){
    return (

 <div>
     {/* <CheckoutForm total={this.total} history={this.props.history} clearCart={this.clearCart}/>  */}
        {/* <button onClick={() => this.clearCart(this.clearCart)}><h3>Delete all</h3></button> */}
        <div className="col-10 mx-auto col-lg-2">
        <h3>My Cart</h3>
        </div>
        
      
           
            {/* <CartItemList cartitems={this.state.cartitems} /> */}
         {this.state.isLoaded === false ? 
            <h3>Your cart is empty</h3>
            
            :
             this.state.cartitems.map(cartlist => <CartItemList cartlist={cartlist} removeitem={this.removeitem} clearCart={this.clearCart} total={this.state.total} />)
             } 
<div>
<div className="col-10 mx-auto col-lg-2">
<h2 className="text-uppercase">Total: ${this.state.total} </h2>
</div>

<div className="col-10 mx-auto col-lg-20"></div>
<Link to="/ItemList">
<button type="button" class="btn btn-secondary btn-lg active">Continue Shopping</button>
</Link>
</div>

<div className="col-10 mx-auto col-lg-1">


<Link to="/CheckoutForm">
<button type="button" class="btn btn-secondary btn-lg active">Checkout</button>
<div>

</div>

</Link>

</div>




 </div>
 )}
}
