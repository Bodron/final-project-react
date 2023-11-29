import React from 'react'
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Tei from './Tei/Tei';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Routes path="/">
        <Route path="/tei" exact element={<Tei />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App