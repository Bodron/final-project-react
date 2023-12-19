import React from 'react'
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import './CancelPay.css'

function CancelPay() {
  return (
    <div className='d-flex align-items-center justify-content-center p-5 m-5 flex-column'>
      <h1 className='text-white'>Cancel</h1>
      <CreditCardOffOutlinedIcon className='icon-cardcancel'></CreditCardOffOutlinedIcon>
      <h5 className='text-white'>Your payment was canceled.</h5>
      </div>
  )
}

export default CancelPay