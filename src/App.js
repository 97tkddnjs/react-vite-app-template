import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from 'react';
import Content from './component/Content';
import Auth from './component/auth/Auth';
import { Router } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import { useEffect } from 'react';

 

const App = () => {


  useEffect(() => {
    console.log('App mounted');
  });

  

  return (<div>
      <NavBar />
      <Content />
      <Footer />
  </div>)

};

 


export default App
