import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from "./../component/header/header"
import Footer from "./../component/footer/footer"
import Home from "./../pages/home/home"
import Error from "./../pages/error/error"

const RouterConfig = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>    
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
);

export default RouterConfig;