import React, { Component } from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CheckoutForm extends Component {
    render() {
        return(
          <Container>
<Col sm="12" md={{ size: 4, offset: 3 }}>
  <form
          className="form-signin lower-content"
           onSubmit={this.props.clearCart}>
            <br></br>
  <h1 className="h3 mb-3 font-weight-normal">Card Information</h1>
  <br></br>
  <p className="h5 mb-3 font-weight-normal">Name on Card</p>
 <label className="sr-only">Name on the Card</label>

 <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Full Name"

            />
            <br />
           
 <p className="h5 mb-3 font-weight-normal">Credit card number</p>
            <input
              className="form-control"
              type="number"
              name="email"
              placeholder="Credit card number"/>
            <br />

            <p className="h5 mb-3 font-weight-normal">Exp Date</p>

            <input
              className="form-control"
              type="date"
              name="Month"
              placeholder="Month"/>
            <br />


            <p className="h5 mb-3 font-weight-normal">CVV</p>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="CVV"/>
            <br />



            <Link to="/Cart">
            <Button
              className="btn btn-lg btn-primary btn-block white-button"
             >
              Continue To Checkout
            </Button>
            </Link>
          </form>
          <br />
          
       
        </Col>
    {/* } */}
       </Container>

   
       );
      }
}
    
  