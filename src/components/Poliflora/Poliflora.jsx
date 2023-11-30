import React from 'react'
import './Poliflora.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridCards from '../../features/GridCards/GridCards'

function Poliflora() {
  return (
    <div><Header/>
    <div className='wrapper-img container-md'>
     <img src="./images/bees-logo.jpeg" alt="logo" />
   </div> 
   <h1 className='text-white p-4'>Poliflora</h1>
    <hr className='white-line'/>
   <div className='container-fluid p-4'>
   <GridCards imageUrl={'images/card4.jpg'}/>
   </div>
   <Footer/></div>
  )
}

export default Poliflora