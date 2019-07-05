import React, { Component } from 'react';
import '../assets/css/App.css'


export default class Filter extends Component{


render(){
    return (<div id="container">
        <div class="column-half column-half-2">
        <label><h4>Sort By:</h4></label>
     <select onChange={(e) => this.props.filter(e)}>
     <option value="all">ALL</option> 
     <option value="name">Name</option>
     <option value="price1">Price: High to Low</option>
     <option value="price2">Price: Low to High</option>
     
     

     </select>


     <br/>
        </div>
     

    </div>)
}






}