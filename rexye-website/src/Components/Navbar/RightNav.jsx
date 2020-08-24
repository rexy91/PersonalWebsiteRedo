import React, { Component } from 'react';
import './RightNav.css'

class RightNav extends Component {

    render() { 
        return (
            // When open is true, transform right bar items. 
            // We are adding css here because we need local state.
            <div className='right-nav'>
                <ul style= {this.props.open ? {transform: 'translateX(0)'} : {transform:'translateX(100%)'}}>
                    {/* When Click About, direct to about and change this.state.open to be false.  */}

                    <li onClick={this.toggleOpen}>About</li>
                    <li>Resume</li>
                    <li>Projects</li>
                    <li>Blogs</li>
                </ul>
            </div>
        );
    }
}

export default RightNav;