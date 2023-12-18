import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='p-5 m-5 d-flex align-items-center justify-content-center flex-column'>
        <h1 className='display-1 text-white p-5'>Oops!</h1>
        <h4 className='text-white'>404 - PAGE NOT FOUND</h4>
        <p className='text-white'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
       <Link to='/home'>
       <button  className='btn-card btn-details m-2'>GO TO HOMEPAGE</button>
       </Link> 
    </div>
  )
}

export default NotFound