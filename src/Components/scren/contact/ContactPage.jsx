import React from 'react';
import './contactPage.css';
import Navigation from "../navigation/NavigationBar";

function ContactPage() {

    return (
        <div className='Contact__Page'>
            <Navigation/>
            <div className='Contact__Main'>
                Welcome Contact Page
            </div>
        </div>
    );
}

export default ContactPage;