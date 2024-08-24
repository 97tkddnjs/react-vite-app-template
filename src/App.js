import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import Content from './component/Content';
import Auth from './component/auth/Auth';
import { Router } from 'react-router-dom';
import NavBar from './component/Atom/NavBar';
import Footer from './component/Atom/Footer';
import { useEffect } from 'react';
import './css/styles.css'; 


const App = () => {


  useEffect(() => {
    console.log('App mounted');
  });

  

  return (<div className="app-container">
      <NavBar />
      <Content />
      <Footer />
  </div>)

};

 


export default App
