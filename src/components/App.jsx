import React, { useEffect } from 'react'
import Header from './Header/Header';
import Home from './Home/Home';
import Salcam from './Salcam/Salcam';
import Admin from './AdminPanel/Admin';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import SignIn from './SignIn/SignIn';
import Profile from './Profile/Profile';
import ItemDetails from './ItemDetails/ItemDetails';
import { useStateValue } from '../StateProvider';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import SuccesPay from './SuccesPay/SuccesPay';
import CancelPay from './CancelPay/CancelPay';
import "@stripe/stripe-js"




function App() {
  
 const [{user},dispatch]= useStateValue()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
 

  return (
   
    <>
    <BrowserRouter>
    <Header />
      <Routes path="/">
        <Route path="/tei/:category" exact element={<Salcam />}></Route>
        <Route path="/itemdetails/:id" exact element={<ItemDetails />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/admin" exact element={<Admin />}></Route>
        <Route path="/signin" exact element={<SignIn />}></Route>
        <Route path="/poliflora/:category" exact element={<Salcam />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/accesorii/:category" exact element={<Salcam />}></Route>
        <Route path="/salcam/:category" exact element={<Salcam />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/succes" exact element={<SuccesPay />}></Route>
        <Route path="/cancel" exact element={<CancelPay />}></Route>
        <Route path="*" exact element={<NotFound />}></Route>
      </Routes>
      <ToastContainer position="top-right"
        autoClose={5000}
          hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
        <Footer/>
    </BrowserRouter>
      </>
    
  )
}

export default App