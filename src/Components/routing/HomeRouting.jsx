import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Routes} from "react-router";
import HomePage from "../scren/home/HomePage";
import AboutPage from "../scren/about/AboutPage";
import ContactPage from "../scren/contact/ContactPage";
import InformationPage from "../scren/info/InformationPage";

function HomeRouting() {
    return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/contact' element={<ContactPage/>}/>
                        <Route path='/info' element={<InformationPage/>}/>
                        <Route path='*' element={<HomePage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
    );
}

export default HomeRouting;