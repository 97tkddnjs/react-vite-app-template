import React from 'react';

// import './App.css'
// import Auth from './component/auth/Auth';
// import Content from './component/Content';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './component/Home' /******/
// import About from './component/About' /******/
// import Contact from './component/Contact' /******/
import Footer from './Footer' /******/
// import Login from './component/auth/Login' /******/
// import Register from './component/auth/Register' /******/
// import Profile from './component/auth/Profile' /******/
import { useState } from 'react'   

const Content = () => {


    return (<div>        
        <Routes>
            <Route exact path="/" element={<div> hi~~</div>} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} /> */}
        </Routes>
    </div>
)

}




export default Content;
