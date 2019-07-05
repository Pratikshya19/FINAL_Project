import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
// import {ProductConsumer} from './Context';
import Item from './Item';
import '../assets/css/App.css';

export default class Details extends Component {
  constructor(){
    super()
    this.state = {
      cartItems: [],
      total: 0,
      count: 0,
      cart : []
    }
  }
  
  
  



addToCart = (id) => {
  console.log(`hello from add to cart',${this.props.item.id}`);
  

fetch('http://localhost:3000/cart_Items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    // cartItems: cartItems
  })
})
} 

    render() {
      console.log(this.props.item)
        return (
      <div>
 <h3>{this.props.item.name}</h3>
      
      <div className="image-container">
      <img src={`../../Pictures/${this.props.item.image_url}`} class="img-fluid img-thumbnail" alt="Product" className="card-img-top"/>
      <h3>{this.props.item.artist}</h3>
      <p>{this.props.item.description}</p>
      <Link to="/">
      <ButtonContainer>Back to the products</ButtonContainer>
      </Link>
      <Link to="/cart">
      <button onClick={(id)=>{this.addToCart(id)}}>Add to the Cart</button>
      </Link>
      {/* <button onClick={(id)=>{this.addToCart(id)}}>Add to the Cart</button> */}
      
      </div>
      

   </div>
    


      
       


        )
    }
}
//   let tempitems = [...this.state.cartItems]
// const index = tempitems.indexOf(this.props.getItem(id))
//   const item = tempitems[index]
//  let price = this.props.item.price
//   this.setState({
//     total : this.state.total + price,
//     cartItems : tempitems ,
//     cart : [...this.state.cartItems]

  // })