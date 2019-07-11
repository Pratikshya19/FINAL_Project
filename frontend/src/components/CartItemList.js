import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { Button, Container, Row, Col } from 'reactstrap';
import '../assets/css/App.css';
import CheckoutForm from './CheckoutForm';


export default class CartItemList extends Component {
    constructor(){
        super()
       
    }
    

    render() {
        console.log(this.props.cartlist)
        return(
<Container>
<div style={{ border: '0.8px solid black', padding: '20px'}}
className="lower-content-50">
<table className="table">
    <tr>
        <th className="data">Image</th>
        <th className="data">Artist</th>
        <th className="data">Price</th>
    </tr>
    <tr>
        <td className="data"><img src={`../../Pictures/${this.props.cartlist.image_url}`} style={{width: "5rem",height:"5rem"}} className="img-fluid" alt="product"/></td>
        </tr>
        <tr>
            <td className="data">{this.props.cartlist.name}</td>
            <td className="data">{this.props.cartlist.artist}</td>
            <td className="data">{this.props.cartlist.price}</td>
            <button onClick={(e) => this.props.removeitem(e, this.props.cartlist.id)}>Delete</button>
        </tr>
      

</table>
</div>

</Container>)}}
        










{/* <div>


<div className = "row">
<img src={`../../Pictures/${this.props.cartlist.image_url}`} style={{width: "5rem",height:"5rem"}} className="img-fluid" alt="product"/>

<p>Name:{this.props.cartlist.name}</p>
<h2>Price:{this.props.cartlist.price}</h2>
 </div>

<Col>
 <button onClick={() => this.props.removeitem(this.props.cartlist.id)}>Delete</button> 


</Col>

<CheckoutForm name={this.props.cartlist.name} price={this.props.cartlist.price} cartlist={this.props.cartlist}/>
</div>
 */}




// )
//  }
//  }