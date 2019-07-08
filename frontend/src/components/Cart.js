import React, { Component } from 'react';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = ({
            cartitems: []
        })
    }
 
   componentDidMount(){
    fetch(`http://localhost:3000/customers/${parseInt(localStorage.customer)}/items`)
        .then(res => res.json())
    .then(data => {
    console.log(data)
    this.setState({
        cartitems: data.items
    })
    })
   }
   
    render(){
        return (
            <div>
                <h3>hello from the Cart</h3>
                <ul>
                    {this.state.cartitems.map(item => <li>{item.name}, {item.price}</li>)}
                </ul>
            </div>)}
    }
    
