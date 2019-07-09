import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
// import { ProductProvider} from "./components/Context";
// import {StripeProvider} from 'react-stripe-elements';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
   
<Router>
    
    <App/>
    {/* <StripeProvider apiKey="pk_test_F2DSfJBqAcWxlGCvAj7eZSmJ006ANFkrys5"></StripeProvider> */}
    </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
