import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div><div className="mt-5 pt-5 pb-5 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
          <h2 className='text-white'>Heading</h2>
          <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
          
        </div>
        <div className="col-lg-3 col-xs-12 links">
          <h4 className="mt-lg-0 mt-sm-3 text-white ">Links</h4>
            <ul className="m-0 p-0 list-links ">
              <li> <NavLink to='/home'>Acasa</NavLink></li>
              <li> <NavLink to='/salcam/Tei'>Tei</NavLink></li>
              <li> <NavLink to='/salcam/Salcam'>Salcam</NavLink></li>
              <li> <NavLink to='/salcam/Accesorii'>Accesorii</NavLink></li>
            </ul>
        </div>
        <div className="col-lg-4 col-xs-12 location">
          <h4 className="mt-lg-0 mt-sm-4 text-white">Location</h4>
          <p className='text-white-50'>22, Lorem ipsum dolor, consectetur adipiscing</p>
          <p className="mb-0 text-white-50"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
          <p className='text-white-50'><i className="fa fa-envelope-o mr-3 "></i>info@hsdf.com</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col copyright d-flex align-items-center justify-content-center flex-column">
        <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="100"
              height="70"
              className="d-inline-block align-top"
              style={{objectFit:'contain'}}
            />
          <p className=""><small className="text-white-50">© 2023. All Rights Reserved.</small></p>
        </div>
      </div>
    </div>
    </div></div>
  )
}

export default Footer