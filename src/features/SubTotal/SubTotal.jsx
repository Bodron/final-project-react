import React from 'react'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../Reducer'

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div> <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Subtotal</p> <p>{getBasketTotal(basket)} Ron</p></div>
   </div>
   <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Total</p> <p>{getBasketTotal(basket)} Ron</p></div>

   </div>
   <div className='d-flex justify-content-center'><button  className='btn-cardfav '>Place Order</button></div></div>
  )
}

export default SubTotal