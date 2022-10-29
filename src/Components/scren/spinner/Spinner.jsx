import React from 'react';
import './spinner.css';

function Spinner(props) {
    return (
        <div className='Spinner__APP'>
            <div className='center'>
                <div className='ring'></div>
                <span>Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;