import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Table, Container } from 'reactstrap';

export default class Checkout extends Component {

render(){
  return(
 <Container> 
      <div
        style={{ border: '1px solid black', padding: '15px' }}
        className="lower-content-50">
        <div>
          <h2>Checkout</h2>
          <Table light>
            <thead>
              <tr>
                <th>Item</th>
               
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              
                <tr>
                  <td>{this.props.name}</td>
                </tr>
              )}
              <tr>
                <td className="bold-text">Total Price:</td>
                <td />
                <td className="bold-text">${this.props.total}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      {/* <CheckoutForm onSubmit={}/> */}
      </Container>)
}



}