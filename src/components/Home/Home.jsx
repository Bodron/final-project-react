import React, { useEffect, useState } from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';
import Cards from '../../features/CardGroup/CardGroup'
import Header from '../Header/Header';
import simpleParallax from 'simple-parallax-js';




var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);


function Home() {



  

  return (
    <>
    <Header/>
     <div className='wrapper-img container-md'>
        <img src="./images/bees-logo.jpeg" alt="logo" />
    </div> 
    <div className='container-md mb-5'>
        <h1 className='text-white'>Recomandate </h1>
        <hr className='white-line'/>
    </div>
    <Carousel className='p-4'>
      <Carousel.Item interval={1000} >
    <Cards/>
      
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Cards/>
       
      </Carousel.Item>
      <Carousel.Item>
      <Cards/>
        
      </Carousel.Item>
    </Carousel>
    <hr className='white-line mb-5'/>
    <div className='container-fluid mb-5 d-flex content-wrapper '>
        <div className='col-md coloana-img '>
        <img src="images/image-home1.jpeg" className='home-img thumbnail' alt="" />   
        </div>
        <div className='col-md d-flex align-items-center justify-content-center flex-column p-5 col-text'>
            <h1 className='text-white'>Albinele Noastre</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente nesciunt sint ea voluptatibus consectetur reprehenderit eius at ipsam! Obcaecati.</p>
        </div>
    </div>
    <div className='container-fluid mb-5 d-flex justify-content-end flex-row-reverse'>
    <div className='col-md coloana-img '>
        <img src="images/image-home2.jpeg" className='home-img thumbnail' alt="" />   
        </div>
        <div className='col-md d-flex align-items-center justify-content-center flex-column p-5 col-text'>
            <h1 className='text-white'>Albinele Noastre</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente nesciunt sint ea voluptatibus consectetur reprehenderit eius at ipsam! Obcaecati.</p>
        </div>
    </div>
    <div className='container-fluid mb-5 '>
    <div className='col-md coloana-img '>
        <img src="images/image-home3.jpeg" className='home-img thumbnail' alt="" />   
        </div>
        <div className='col-md d-flex align-items-center justify-content-center flex-column p-5 col-text'>
            <h1 className='text-white'>Albinele Noastre</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente nesciunt sint ea voluptatibus consectetur reprehenderit eius at ipsam! Obcaecati.</p>
        </div>
    </div> 
    <Footer/>
    </>
  )
}

export default Home