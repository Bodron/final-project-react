import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import GridCards from '../../features/GridCards/GridCards'


function Tei() {
  return (
      <div>
        <Header/>
        <div className='wrapper-img container-md'>
         <img src="./images/bees-logo.jpeg" alt="logo" />
       </div> 
       <h1 className='text-white p-4'>Tei</h1>
        <hr className='white-line'/>
       <div className='container-fluid p-4'>
       <GridCards imageUrl={'images/card1.jpg'}/>
       </div>
       <Footer/>
        </div>
  )
}

export default Tei