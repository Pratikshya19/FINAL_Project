import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import {ProductConsumer} from './Context';
import Item from './Item';
// import ItemList from './ItemList';

export default class Details extends Component {
   
    render() {
 
        return (
      <div>
<ProductConsumer>
      {(value) => {
        console.log({value})
      //  value.selecteditem.description
                           }}
                            
                        </ProductConsumer>
     
        {/* <ProductConsumer> */}
   {/* <h3>Hello from details</h3> */}
{/* console.log(value) */}
   {/* </ProductConsumer> */}
   </div>
    


      
       


        )
    }
}
