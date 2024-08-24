import React from 'react';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { useState } from 'react'   
import Home from './Home';
import AddItem from './page/AddItem';

const Content = () => {


    return (<div className="app-container">        
        <Routes>
            <Route exact path="/" element={<Home/>} >
                <Route path="/home" element={<Home/>} />
            </Route>
            <Route path="/addItem" element={<AddItem/>} />
        </Routes>
    </div>
)

}
 



export default Content;
