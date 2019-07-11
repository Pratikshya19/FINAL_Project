import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import { ButtonContainer } from './Button';
import Searchbar from './Searchbar';
import login from './login'
import SignUp from './SignUp'
import ItemList from './ItemList'
import styled from "styled-components";


export default class Navbar extends Component {
render() {
        return (
            // <div className="navbar-inner"></div>
            // <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
         <nav className="navbar navbar-expand-lg bg-light navbar-lightpx-lg-5"> 
    <Link to='/'><h3>HOME</h3></Link>

   <Link to='/SignUp' className="ml-auto"><h3>SIGN UP</h3></Link>

<Link to="/login" className="ml-auto"><h3>LogIn/LogOut</h3></Link>

<Searchbar Search={this.props.Search}/>

<Link to='/cart' className="ml-auto">
    <ButtonContainer>
<span className="mr-4"><h5>My CART</h5>
</span>
    </ButtonContainer>
</Link>



</nav>

    
         
        )
    }
}

// const nav = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size:1.3rem;
//     text-transform:capitalize;
//   `};
 
