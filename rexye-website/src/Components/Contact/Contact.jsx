import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='contact-section' id='contact'>
                    <h4>Contact Me</h4>
                    <form action="">
                        <label >Name</label>
                        <input type="text" name='sendername'/>
                        <label>Email</label>
                        <input type='text' name='senderemail' placeholder='your email'></input>

                    </form>
            </div>
        );
    }
}

export default Contact;