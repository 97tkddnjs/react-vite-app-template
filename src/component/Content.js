import React from 'react';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { useState } from 'react'   
import Home from './Home';
import AddItem from './page/AddItem';
import Auth from './auth/Auth';
import PrivateRoute from './page/PrivateRoute';

const Content = () => {


    return (<div className="app-container">        
        <Routes>
            {/* login 되었을 때 */}
            <Route path="/" element={<PrivateRoute element={Home} />} />
            <Route path="/home" element={<PrivateRoute element={Home} />} />
            <Route path="/addItem" element={<PrivateRoute element={AddItem} />} />
            {/* 로그인 페이지는 인증 체크 필요 없음 */}
             <Route path="/login" element={<Auth />} />
        </Routes>
    </div>
)

}
 



export default Content;
