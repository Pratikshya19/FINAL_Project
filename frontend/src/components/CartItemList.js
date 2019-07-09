import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { Button, Container, Row, Col } from 'reactstrap';
import '../assets/css/App.css';
import Checkout from './Checkout';


export default class CartItemList extends Component {
    constructor(){
        super()
       
    }
    




    render() {
        console.log(this.props.cartlist)
        return(
        
<div>
<img src={`../../Pictures/${this.props.cartlist.image_url}`} style={{width: "5rem",height:"5rem"}} className="img-fluid" alt="product"/>

<h2>Name:{this.props.cartlist.name}</h2>
<h2>Price:{this.props.cartlist.price}</h2>
<Col>
<ButtonContainer>Remove Item </ButtonContainer>

</Col>


</div>





)
 }
 }