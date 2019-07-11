import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../assets/css/App.css';
import Cart from './Cart';


export default class Details extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

addToCart = (e,id) => {
  e.preventDefault()
  console.log(`hello from add to cart',${this.props.item.id}, ${this.props.item.name}`);
  

fetch('http://localhost:3000/cart_Items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    item_id: this.props.item.id,
    customer_id: parseInt(localStorage.customer)
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
      

      <Link to="/ItemList">
      <ButtonContainer>Back to the products</ButtonContainer>
      </Link>
      <Link to="/cart">
      <button onClick={(id)=>{this.addToCart(id)}}>Add to the Cart</button>
      </Link>
      
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