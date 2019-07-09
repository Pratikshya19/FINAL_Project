import React, {Component} from 'react';
// import {CardElement, injectStripe} from 'react-stripe-elements';


const stripe = "hi"//window.Stripe('pk_test_F2DSfJBqAcWxlGCvAj7eZSmJ006ANFkrys');

class CheckoutForm extends Component {

  componentDidMount(){
    const elements = stripe.elements();
this.card = elements.create('card')
this.card.mount('#card-element')
  }



  render(){

    const onAdd = async (e) => {
      e.preventDefault()

      const cardholderName = document.getElementById('cardholder-name');
      
      const { paymentMethod, error } = await stripe.createPaymentMethod('card', this.card, {
          billing_details: {
              name: cardholderName.value
          }
      });
      if (error) {
          // Show error in payment form
      } else {
          // Send paymentMethod.id to your server (see Step 2)
          const response = await fetch(`http://localhost:3000/customers/${this.props.currentCustomer.id}/checkout`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ payment_method_id: paymentMethod.id })
          });

          const json = await response.json();

      }
      alert('Transaction completed!')
      this.props.clearCartItems()
      this.props.history.push("/items")
  }







    return(<div>

<form action="/charge" method="post" id="payment-form">
  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>
    <div id="card-element">
      {/* <!-- A Stripe Element will be inserted here. --> */}
    </div>

    {/* <!-- Used to display Element errors. --> */}
    <div id="card-errors" role="alert"></div>
  </div>

  <button>Submit Payment</button>
</form>

    </div>)
  }
    
}

// export default injectStripe(CheckoutForm);
export default CheckoutForm;
