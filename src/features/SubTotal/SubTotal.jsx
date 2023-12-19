import React from 'react'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../Reducer'
import {loadStripe} from '@stripe/stripe-js'


let stripePromise
const getStripe = () =>{
  if(!stripePromise){
     stripePromise = loadStripe('pk_test_51OOj2OGl5kY22JmCoWhREJIuNsRwCF2v7kvFp3xbbxgufVq36AzC1Uq5dAxDkA25DQjo2EphQk6RUfpuJN0LhkI900GCVhQnuu')
  }
  return stripePromise
}

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()
  const item = {
    price:"price_1OOpDfGl5kY22JmCj5BbcKex",
    quantity:1
  }

  const checkoutOptions = {
    lineItems:[item],
    mode:"payment",
    successUrl:`http://localhost:5173/succes`,
    cancelUrl:`http://localhost:5173/cancel`,
  }

  const redirectToCheckout = async () => {
    console.log('redirectToCheckout')
    const stripe = await getStripe()
   const {error} =  await stripe.redirectToCheckout(checkoutOptions)
   console.log("Stripe checkout error",error)
  }

  return (
    <div> <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Subtotal</p> <p>{getBasketTotal(basket)} Ron</p></div>
   </div>
   <div className='row d-flex '>
    <div className='col d-flex justify-content-between'><p>Total</p> <p>{getBasketTotal(basket)} Ron</p></div>

   </div>
   <div className='d-flex justify-content-center'>
   
   <button  className='btn-cardfav' onClick={redirectToCheckout} >Plaseaza Comanda</button>
   
   
    
    </div>
    </div>
  )
}

export default SubTotal