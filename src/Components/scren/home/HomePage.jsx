import React from 'react';
import './homePage.css';
import Navigation from "../navigation/NavigationBar";
function HomePage() {
    return (
        <div className='Home__Page'>
            <Navigation/>
            <div className='Home__Main'>
                Welcome Home Page
            </div>
        </div>
    );
}

export default HomePage;