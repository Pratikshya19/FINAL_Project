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
import CartItemList from './CartItemList';
import CheckoutForm from './CheckoutForm';
import Home from './Home'
import Searchbar from './Searchbar';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
     paintings: [],
      isLoading: false,
      displaypaintings:[],
      selecteditem: {},
    }
  }
  
componentWillMount(){
  if(localStorage.getItem('cartItems')){
    this.setState({CartItems: JSON.parse(localStorage.getItem('cartItems'))});
  }
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

  handleDetail = (painting) => {
    console.log("clicked:",painting.id)
  
     this.setState({
       ...this.state,
       selecteditem: painting
     })
  }
  

   render(){
    return(<div>

      <Navbar Search={this.Search} /> 
  {/* <Filter filter={this.filter} />  */}

{/* <Home displaypaintings={this.state.displaypaintingsdisplaypaintings}/>  */}

  <Switch>
 <Route exact path="/" render={ () => <Home displaypaintings={this.state.displaypaintingsdisplaypaintings}/> }/> 

 <Route path="/SignUp" component={SignUp} hideNavBar={true} />
 <Route path="/login" component={login} />

 {/* <Route path="/search" component={Searchbar}/> */}


 <Route path="/search" render={ () => <Searchbar Search={this.Search}/> } />

 <Route path="/details" render={ () => <Details item={this.state.selecteditem} inCart={this.state.inCart}/> }/>
 <Route path="/cart" component={Cart}/>
 
  

 <ItemList displaypaintings={this.state.displaypaintings} handleDetail={this.handleDetail} filter={this.filter} item={this.state.selecteditem} />



  {/* <Route exact path="/" render={ () => <ItemList displaypaintings={this.state.displaypaintings} handleDetail={this.handleDetail} addToCart={this.addToCart}/> }/> */}
{/*   

  <Route path="/details" render={ () => <Details item={this.state.selecteditem} inCart={this.state.inCart}/> }/> */}

  
  <Route path="/CheckoutForm" component={CheckoutForm}/>
  {/* <Searchbar Search={this.Search}/> */}
  <Route component={DefaultPage}/>
  </Switch>
 
 
    </div>)
  }
}


    
