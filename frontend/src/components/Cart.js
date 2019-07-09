import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import CartItemList from './CartItemList';
import { ButtonContainer } from './Button';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = ({
            cartitems: [],
            total: 0 

        })
    }
 

clearCart = () => {
    console.log("cart is cleared");
}

removeitem = (id) => {
    fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items/${id}`, { method: "DELETE" })
      .then(() => {
        console.log('Removed')
      }).catch(err => {
        console.error(err)
      })
      
      }
    
    



increaseQ = () => {

}

decreaseQ = () => {


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
    fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items`)
        .then(res => res.json())
    .then(data => {
    this.setState({
        cartitems: data.items
    })
    }).then(this.sum)
   }
   
   render(){
    return (

 <div>
            <h3>My Cart</h3>
            
            {this.state.cartitems.map(cartlist => <CartItemList cartlist={cartlist} removeitem={this.removeitem} clearCart={this.clearCart} />)}


<Link to="/">
<ButtonContainer>Continue Shopping </ButtonContainer>
</Link>

<Link to="/Checkout">
<ButtonContainer>Checkout</ButtonContainer>
</Link>
<h2>${this.state.total}</h2>
 </div>)}
}
