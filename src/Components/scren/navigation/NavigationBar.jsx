import React, {useCallback} from 'react';
import './navigation.css';
import {useNavigate} from "react-router";
import { FaReact } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaSatelliteDish } from 'react-icons/fa';




function NavigationBar() {
    const nav = useNavigate();
    const navHome = useCallback(()=>{
        nav('/');
    },[])
    const navAbout = useCallback(()=>{
        nav('/about')
    },[]);
    const navContact = useCallback(()=>{
        nav('/contact')
    },[]);
    const navInfo = useCallback(()=>{
        nav('/info')
    },[])
    return (
        <div className='Nav__Header'>
            <div className='Nav__Logo'>
                <FaReact onClick={navHome} style={{cursor:"pointer"}}/>
            </div>
            <div className='Nav__LinkGroup'>
                <div className='Nav__Link' onClick={navHome}> <FaHome className='icons'/> Home</div>
                <div className='Nav__Link' onClick={navAbout}> <FaSatelliteDish className='icons'/> About</div>
                <div className='Nav__Link' onClick={navContact}> <FaPhone className='icons'/>  Contact</div>
                <div className='Nav__Link' onClick={navInfo}> <FaInfo className='icons'/> Info</div>
            </div>
        </div>
    );
}

export default NavigationBar;