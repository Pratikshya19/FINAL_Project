import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
// import PropTypes from 'prop-types';
import Details from './Details';

export default class Item extends Component {
render() {
    console.log(this.props)
const {id,name,price,image_url,artist} = this.props.item;
        return (

            <ItemWrapper className="col-9 mx-auto col-md-6 col-lg-3">

   {/* <Details item = {this.props.item}/>  */}
   
<div className='card'>

    <div className="img-container p-5" onClick={() => this.props.handleDetail(this.props.item)}>

        <Link to='/details'>
          
            <div id="main-border">
       <img src={`../../Pictures/${image_url}`} alt="Product" className="card-img-top"/>
            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
{name}
                </p>
              <p><span className="mr-1">${price}</span></p>
              
              
            </div>
            </div>
        </Link>

</div>
</div>

            </ItemWrapper>
           

          

             


        )
    }
}
// Item.propTypes = {
//     item: PropTypes:shape{
//         id.PropTypes.number,
//         img:PropTypes
//     }
// }

const ItemWrapper = styled.div `
.card{
  
    transition:all 1s linear;
}
.card-footer{
    back-ground: transparent;
    
    transition:all 1s linear;
border:0.04re, solid rgba(0,0,0.2);

}
.main-border {
    background-size: 100% 100%;
    height: 700px;
    width: 650px;
margin-left: auto;
margin-right: auto;
}
img{
    max-width: 100%;
    max-height: 100%;
}
`


