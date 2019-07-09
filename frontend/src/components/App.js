import React, { Component } from 'react';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Filter from './Filter'
import ItemList from './ItemList'
import Details from './Details'
import Cart from './Cart'
import DefaultPage from './DefaultPage'
import login from './login'
import SignUp from './SignUp'
// import Home from './Home'
// import Routes from './Routes';
import CartItemList from './CartItemList';
import Checkout from './Checkout';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
     paintings: [],
      isLoading: false,
      displaypaintings:[],
      selecteditem: {},
      // inCart:false,
      // total:0,
      // cartSubTotal:0,
      
      // CartItems: []
    }
  }
  
componentWillMount(){
  if(localStorage.getItem('cartItems')){
    this.setState({CartItems: JSON.parse(localStorage.getItem('cartItems'))});
  }
}

// handleRemoveFromCart = (e,item) => {

// let CartItems = this.state.CartItems.filter(a => a.id !== item.id);

// localStorage.setItem('CartItems', JSON.stringify(CartItems));
// }

// handleAddToCart = (e,item) => {

//   this.setState({


//   })
// }

// addToCart = (id) => {
//   fetch('http://localhost:3000/cart_Items', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       item_id: this.state.selecteditem.id,
//       shopping_cart_id: 1,
  
//     })
//   })
//   } 

Search = (event) => {
  let value = event.target.value
  console.log(event.target.value)
  if (value !=="") {
  
  this.setState({
    displaypaintings: this.state.displaypaintings.filter(item => (item.name.toLowerCase().includes(value.toLowerCase()))
      || (item.artist.toLowerCase().includes(value.toLowerCase()))
      )
  })
    
}else{
  this.setState({displaypaintings:this.state.paintings})
  }}


filter = (e) => {
  let x
  console.log(e.target.value)
if(e.target.value==='name'){
  x = this.state.displaypaintings.sort((a,b)=>{ return a.name < b.name ? -1 : 1 })

} else if(e.target.value==='price1') {
  x= this.state.displaypaintings.sort((a,b)=> { return a.price < b.price ? 1 : -1 })
} else  {
  x= this.state.displaypaintings.sort((a,b)=> { return a.price < b.price ? -1 : 1 })
}
this.setState({displaypaintings:x})

}

 componentDidMount(){
    fetch(`http://localhost:3000/items`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
    this.setState({
      paintings: data,
      displaypaintings: data,
      isLoading: false,})
  })
  }

  handleDetail = (painting) => {
    console.log("clicked:",painting.id)
  
     this.setState({
       ...this.state,
       selecteditem: painting
     })
  }
  

//   getItem = (id) => {
//     const item = this.state.paintings.find(item => item.id === id)
//     return item
//   }

// addTotal = () => {
// let subtotal = 0;
// // this.state.CartItems(item => (subtotal += ))
// }

   render(){
    return(<div>
  <Navbar Search={this.Search} />
  <Filter filter={this.filter} />
  <Switch>
 {/* <Route exact path="/" render={ () => <Home /> }/>  */}


  <Route exact path="/" render={ () => <ItemList displaypaintings={this.state.displaypaintings} handleDetail={this.handleDetail} addToCart={this.addToCart}/> }/>
  
  <Route path="/details" render={ () => <Details item={this.state.selecteditem} inCart={this.state.inCart} addToCart={this.addToCart}/> }/>

  <Route path="/cart" component={Cart}/>
  <Route path="/login" component={login} />
  <Route path="/SignUp" component={SignUp} />
  <Route path="/Checkout" component={Checkout}/>
  {/* <Searchbar Search={this.Search}/> */}
  <Route component={DefaultPage}/>
  </Switch>
  
 

    </div>)
  }
}


    
