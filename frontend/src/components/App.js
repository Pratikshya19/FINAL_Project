import React, { Component } from 'react';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'

import ItemList from './ItemList'
import Item from './Item'
import Details from './Details'
import Cart from './Cart'
import DefaultPage from './DefaultPage'
import login from './login'
import SignUp from './SignUp'

export default class App extends Component {
  
 
   render(){
    return(<div>
  <Navbar/>
  
  <Switch>
  <Route exact path="/" component={ItemList}/>
  {/* <Route exact path="/:id" component={Item}/> */}
  <Route path="/details" component={Details}/>
  <Route path="/cart" component={Cart}/>
  <Route path="/login" component={login} />
  <Route path="/SignUp" component={SignUp} />
  <Route component={DefaultPage}/>
  </Switch>
 

    </div>)
  }
}


    
