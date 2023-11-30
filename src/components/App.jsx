import React from 'react'
import Header from './Header/Header';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Tei from './Tei/Tei';
import Salcam from './Salcam/Salcam';
import Admin from './AdminPanel/Admin';
import Login from './Login/Login';
import Accesorii from './Accesorii/Accesorii';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import Poliflora from './Poliflora/Poliflora';
import SignIn from './SignIn/SignIn';
import Profile from './Profile/Profile';
import ItemDetails from './ItemDetails/ItemDetails';



function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Routes path="/">
        <Route path="/tei" exact element={<Tei />}></Route>
        <Route path="/itemdetails" exact element={<ItemDetails />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/admin" exact element={<Admin />}></Route>
        <Route path="/signin" exact element={<SignIn />}></Route>
        <Route path="/poliflora" exact element={<Poliflora />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/accesorii" exact element={<Accesorii />}></Route>
        <Route path="/salcam" exact element={<Salcam />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App