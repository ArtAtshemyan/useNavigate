import React from 'react';
import './informationPage.css';
import Navigation from "../navigation/NavigationBar";

function InformationPage(props) {
    return (
        <div className='Information__Page'>
            <Navigation/>
            <div className='Information__Main'>
                Welcome Information Page
            </div>
        </div>
    );
}

export default InformationPage;