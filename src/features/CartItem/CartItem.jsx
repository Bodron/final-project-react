import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CartItem.css'

function CartItem({id,title,image,price,cantitate,priceId}) {
  const [{basket},dispatch] = useStateValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  const updateQuantity = (newQuantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      id: id,
      newQuantity: newQuantity,
    });
  };

  const handleDecrease = () => {
    const newQuantity = Number(cantitate) - 1;
    if(newQuantity === 0 ){
      removeFromBasket()
    }else if (newQuantity >= 0) {
      
      updateQuantity(newQuantity);
      updateLocalStorage(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = Number(cantitate) + 1;
    updateQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const updateLocalStorage = (newQuantity) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, cantitate: newQuantity } : item
    );
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };
  return (
    <>
    <div key={[id,priceId]}>
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
                  <p  className=''> {cantitate * price} RON</p>
                </div>
                <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
                <input type="number" id="quantity"  name="quantity" value={cantitate} className='mb-2'/>
                <div className="changeq">

                <button className='btn-cart' onClick={handleDecrease}>-</button>
                <button className='btn-cart' onClick={handleIncrease}>+</button>
                </div>
                <div className='d-flex justify-content-evenly'>
                  <button  className='btn-cardfav' onClick={removeFromBasket}>Remove Article</button>
                  </div>
                </div>
              </div>
    </div>
    </>
  )
}

export default CartItem