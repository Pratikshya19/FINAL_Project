import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Details from './Details';
import 'semantic-ui-css/semantic.min.css'


export default class Item extends Component {
render() {
    console.log(this.props.item)
        return (

<ItemWrapper className="col-1 mx-auto col-md-2        col-lg-4">
{/* 
    <div className="container">
        <div className="row">

        </div>
    </div> */}
<div className='card'>
<div className="img-container p-9" onClick={() => this.props.handleDetail(this.props.item)}>

<Link to='/details'>
          
<div id="main-border">
       <img src={`../../Pictures/${this.props.item.image_url}`} alt="Product" className="card-img-top"/>
            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
{this.props.item.name}
                </p>
              <p><span className="mr-1">${this.props.item.price}</span></p>
              
              
            </div>
            </div>
        </Link>

</div>
</div>

            </ItemWrapper>
           
        )
    }
}


const ItemWrapper = styled.div `
.card{
  
    transition:all 4s linear;
}
.card-footer{
    back-ground: transparent;
    
    transition:all 1s linear;
border:0.04re, solid rgba(0,0,0.2);

}
.main-border {
    background-size: 90% 90%;
    height: 700px;
    width: 700px;
margin-left: auto;
margin-right: auto;
}
img{
    max-width: 90%;
    max-height: 90%;
}
`


