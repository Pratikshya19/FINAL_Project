import React, { Component } from 'react'
import Item from './Item';
import {ProductConsumer} from './Context';


export default class ItemList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                    <h3> ALL ITEMS </h3>
                    <div className="row">
                        <ProductConsumer>
                           {(value) => {
console.log(value)
return value.displaypaintings.map(item => 
    {return <Item key={item.id} item={item} handleDetail={value.handleDetail}/>})
                           }} 
                            
                        </ProductConsumer>
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
                
        
            
              
            
        )
    }
}




