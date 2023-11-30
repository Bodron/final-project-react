import React from 'react'

function SubTotal() {
  return (
    <div> <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Subtotal</p> <p>15 Ron</p></div>
   </div>
   <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Total</p> <p>15 Ron</p></div>

   </div>
   <div className='d-flex justify-content-center'><button  className='btn-cardfav '>Place Order</button></div></div>
  )
}

export default SubTotal