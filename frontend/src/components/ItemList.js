import React, { Component } from 'react'
import Item from './Item';









export default class ItemList extends Component {



    componentDidMount() {

fetch('http')


    }










    render() {
        console.log(this.props.displaypaintings)
        return (
            <div className="py-4">
             <div className="container">
                   <div className="row">
                   <h3> ALL ITEMS </h3>
                  <div className="row">
              {this.props.displaypaintings.map(item => <Item item={item} handleDetail={this.props.handleDetail}/>)}
            </div>
                
                </div>
            </div>
          
              </div>  
        )}
            
              
            
        
    
}




