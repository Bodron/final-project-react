import React from 'react'

function CartItem() {
  return (
    <div>
         <div className='row mb-4'>
                <div className='col'>
                <img
              alt=""
              src="/images/card1.jpg"
              width="100"
              height="70"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
                </div>
                <div className='col d-flex align-items-start justify-content-center flex-column'>
                  <h5 className=''>Title Product</h5>
                  <p  className=''>150 Ron</p>
                </div>
                <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
                <div className='d-flex justify-content-evenly'><button  className='btn-cardfav '>Remove Article</button></div>
                </div>
              </div>
    </div>
  )
}

export default CartItem