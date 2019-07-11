import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import pic from './pic.png';
import '../assets/css/App.css';
import ItemList from './ItemList'
import { ButtonContainer } from './Button';


export default class Home extends Component {
render() {
        return(<div>


        
            <div className="position">
<Link to='/ItemList' className="ml-auto">
<img class="center-fit" src={ pic }  />

</Link>

    </div>
    </div>
    
    
        );
            }}


