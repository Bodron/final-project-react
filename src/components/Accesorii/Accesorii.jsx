import React from 'react'
import './Accesorii.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridCards from '../../features/GridCards/GridCards'

function Accesorii() {
  return (
    <div> <div><Header/>
    <div className='wrapper-img container-md'>
     <img src="./images/bees-logo.jpeg" alt="logo" />
   </div> 
   <h1 className='text-white p-4'>Accesorii</h1>
    <hr className='white-line'/>
   <div className='container-fluid p-4'>
   <GridCards imageUrl={'images/pinten.jpg'}/>
   </div>
   <Footer/></div></div>
  )
}

export default Accesorii