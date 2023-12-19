import React from 'react'
import './SuccesPay.css'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function SuccesPay() {
  return (
    <div className='d-flex align-items-center justify-content-center p-5 m-5 flex-column'>
      <h1 className='text-white p-4 '>Success</h1>
      <CheckCircleOutlinedIcon className='icon-card p-4'></CheckCircleOutlinedIcon>
      <h5 className='text-white'>Thank you for your purchase!</h5>
      </div>
  )
}

export default SuccesPay