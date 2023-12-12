import React from 'react'
import { useStateValue } from '../../StateProvider'

function CartItem({id,title,image,price}) {
  const [{basket},dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div key={id}>
         <div className='row mb-4'>
                <div className='col'>
                <img
              alt=""
              src={image}
              width="100"
              height="70"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
                </div>
                <div className='col d-flex align-items-start justify-content-center flex-column'>
                  <h5 className=''>{title}</h5>
                  <p  className=''>{price} RON</p>
                </div>
                <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
                <input type="number" id="quantity" placeholder='1' name="quantity" min="1" max="5" className='mb-2'/>
                <div className='d-flex justify-content-evenly'><button  className='btn-cardfav' onClick={removeFromBasket}>Remove Article</button></div>
                </div>
              </div>
    </div>
  )
}

export default CartItem