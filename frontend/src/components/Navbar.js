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
            // <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
         <nav className="navbar navbar-expand-sm bg-light navbar-lightpx-sm-5"> 
    <Link to='/'>HOME</Link>

   <Link to='/SignUp' className="ml-auto">Sign Up</Link>

<Link to="/login" className="ml-auto">LogIn</Link>

<Searchbar Search={this.props.Search}/>

<Link to='/cart' className="ml-auto">
    <ButtonContainer>
<span className="mr-2">
My cart</span>
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
 
