import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div><div class="mt-5 pt-5 pb-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2 className='text-white'>Heading</h2>
          <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
          <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3 text-white ">Links</h4>
            <ul class="m-0 p-0 ">
              <li> <a  className="text-white"href="#">Acasa</a></li>
              <li> <a  className="text-white"href="#">Tei</a></li>
              <li><a  className="text-white"href="#">Salcam</a></li>
              <li> <a  className="text-white" href="#">Utilaje</a></li>
            </ul>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4 text-white">Location</h4>
          <p className='text-white-50'>22, Lorem ipsum dolor, consectetur adipiscing</p>
          <p class="mb-0 text-white-50"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
          <p className='text-white-50'><i class="fa fa-envelope-o mr-3 "></i>info@hsdf.com</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright d-flex align-items-center justify-content-center flex-column">
        <img
              alt=""
              src="/images/bees-logo.jpeg"
              width="100"
              height="70"
              className="d-inline-block align-top"
              style={{objectFit:'contain'}}
            />
          <p class=""><small class="text-white-50">© 2023. All Rights Reserved.</small></p>
        </div>
      </div>
    </div>
    </div></div>
  )
}

export default Footer