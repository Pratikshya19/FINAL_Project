import React, { Component } from 'react'
import Filter from './Filter'
import Item from './Item';

export default class ItemList extends Component {
render() {
  console.log(this.props.displaypaintings)
 return (<div>
 <Filter filter={this.props.filter} /> 
     <div className="py-4">

             <div className="container">
                   <div className="row">
          
                   <h2> ALL PAINTINGS </h2>
                   <br></br>
                  <div className="row">
              {this.props.displaypaintings.map(item => <Item item={item} handleDetail={this.props.handleDetail}/>)}
            </div>
            </div>
            </div>
          </div> 
          </div> 
        )}
            
              
            
        
    
}




