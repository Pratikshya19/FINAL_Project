import React, { Component } from 'react';


export default class App extends Component {


render(){
    console.log(this.props)
    return(
        <div>
           <h3>{this.props.name}</h3> 
        </div>
    )
}

}