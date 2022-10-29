import React from 'react';
import './aboutPage.css';
import Navigation from "../navigation/NavigationBar";


function AboutPage() {
    return (
        <div className='About__Page'>
            <Navigation/>
            <div className='About__Main'>
                Welcome About Page
            </div>
        </div>
    );
}

export default AboutPage;