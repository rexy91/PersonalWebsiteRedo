import React, { Component } from 'react';
import './Burger.css'
import RightNav from './RightNav'

class Burger extends Component {
    // Animation 

    state={
        open:false
    }
    toggleBurger = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        return (
            <>
            <div className='burger' open={this.state.open} onClick = {this.toggleBurger}>
                    <div style={ this.state.open ?  {backgroundColor:'#f1f1f1', transform: 'rotate(40deg)'} : {backgroundColor:'black'} }></div>
                    <div style={ this.state.open ?  {backgroundColor:'#f1f1f1' } : {backgroundColor:'black'} }></div>
                    <div style={ this.state.open ?  {backgroundColor:'#f1f1f1'} : {backgroundColor:'black'} }></div>
                    
            </div>
                {/* <RightNav open={this.state.open}/> */}
                <RightNav />
            </>
            
        );
    }
}

export default Burger;