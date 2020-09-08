import React, {Component} from 'react'
import './Navbar.css'
import Burger from './Burger'
import RightNav from './RightNav'
import * as Scroll from 'react-scroll'
import {Link, animateScroll as scroll} from 'react-scroll'

class Navbar extends Component {

    render(){
        let Link = Scroll.Link;

        return(
                <div className='navbar-component'>
                    <div className='logo'>
                    <Link
                        activeClass = 'active'
                        to='main'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            Rex Ye
                    </Link>
                    </div>  
                    <ul>
                    <Link
                        activeClass = 'active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>
                            <li>About</li>
                    </Link>                    
                    
                    <Link
                        activeClass = 'active'
                        to='resume'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration= {500}>
                            <li>Resume</li>
                    </Link>
                    <Link
                        activeClass = 'active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration= {500}>
                            <li>Projects</li>
                    </Link>
                    <Link
                        activeClass = 'active'
                        to='blogs'
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration= {500}>
                            <li>Blogs</li>
                    </Link>
                    <Link
                        activeClass = 'active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        // 0, doesnt give any margin to the top when scolling. 
                        offset={-65}
                        duration= {500}>
                            <li>Contact</li>
                    </Link>
                </ul>
                <div className='burger-div'>
                <Burger/>
                </div>
                </div>
            
        )
    }
}

export default Navbar
