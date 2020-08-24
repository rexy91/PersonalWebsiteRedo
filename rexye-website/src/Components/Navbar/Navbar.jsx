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
                    <ul>
                    <li>About</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                </ul>
                <div className='burger-div'>
                <Burger/>
                </div>
                </div>
            
        )
    }
}

export default Navbar
