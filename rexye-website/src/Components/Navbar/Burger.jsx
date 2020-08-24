import React, { Component } from 'react';
import './Burger.css'
import RightNav from './RightNav'

class Burger extends Component {
    // Animation 

    state={
        open:false
    }
    
    // this toggles the right nav bar open 
    toggleBurger = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        console.log(this.state.open)
        return (
            <>
            <div className='burger' open={this.state.open} onClick = {this.toggleBurger}>
                    <div style={ this.state.open ?  {backgroundColor:'#DCDCDC', transform: 'rotate(40deg)'} : {backgroundColor:'black'} }></div>
                    <div style={ this.state.open ?  {backgroundColor:'#DCDCDC' } : {backgroundColor:'black'} }></div>
                    <div style={ this.state.open ?  {backgroundColor:'#DCDCDC'} : {backgroundColor:'black'} }></div>      
            </div>
                
                <RightNav open={this.state.open}/>
            </>
            
        );
    }
}

export default Burger;