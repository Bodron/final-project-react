import React from 'react'
import './ItemDetails.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Carousel from 'react-bootstrap/Carousel';
import Cards from '../../features/CardGroup/CardGroup';


function ItemDetails() {
  return (
    <div>
      <div className='mb-5 p-3'><Header/></div>
      <div className=' container-fluid  imgopc  '>
        <div className='container-fluid containerabs p-5 ' >
            <h1 className='text-white'>Title Miere de Albine la borcan</h1> 
            <hr className='white-line'/>
            <div className='row d-flex '>

            <div className='col-md-6 p-4 mb-5 d-flex align-item-center justify-content-center'>
            <img id='imgDetails'
              alt=""
              src="/images/card1.jpg"
              width="500"
              height="500"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
            </div>
            <div className='col-md-4 p-5 '>
              <div className='item-price'>
                <h4 className='text-white '>14.00 lei</h4>
                <p className='text-white' >Status:<p className='text-succes'>In stoc</p></p>
              </div>
              <hr className='white-line'/>
              <div className='description p-3'>
                <p className='text-white h4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi asperiores eveniet accusamus deleniti repellendus sunt corrupti unde maiores recusandae harum.</p>
              </div>
              <hr className='white-line'/>
              <div className='buttons-details'>
              <label  className="text-white m-3 "for="quantity">Quantity : </label>
              <input type="number" id="quantitydetails" value={1} name="quantity" min="1" max="5"/>
              <button  className='btn-cardfav btn-details m-2 '>Cumpara</button>
             <FavoriteBorderIcon className='text-white'/> 
              </div>
              <hr className='white-line'/>
              <div className='item-price  m-4'>
                
                <p className='text-white ' >Categorie: Miere de albine la borcan<p className='text-succes'>tag: Tei</p></p>
              </div>
              
            </div>
            <div className='container-md container-white  '>
          <h3 className=' text-center text-white p-1'>Produse similare</h3>
        </div>
            </div>
        </div>
    </div> 
        
          <Carousel className='p-4'>
      <Carousel.Item interval={1000} >
       
        
        <Cards />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Cards/>
       
      </Carousel.Item>
      <Carousel.Item>
      <Cards/>
       
      </Carousel.Item>
    </Carousel>
      <Footer/>
    </div>
  )
}

export default ItemDetails