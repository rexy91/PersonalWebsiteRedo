import React, {Component} from 'react'
import './Navbar.css'
import Burger from './Burger'
import RightNav from './RightNav'
class Navbar extends Component {

    render(){
        return(
                <div className='navbar-component'>
                    <div className='logo'>
                            RexYe Website
                    </div>  
                    <Burger/>
                </div>
            
        )
    }
}

export default Navbar
