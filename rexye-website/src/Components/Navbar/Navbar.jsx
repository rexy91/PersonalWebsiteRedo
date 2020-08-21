import React, {Component} from 'react'
import './Navbar.css'

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
            </div>
        )
    }
}

export default Navbar
