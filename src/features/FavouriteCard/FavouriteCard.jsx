import React from 'react'
import { useStateValue } from '../../StateProvider'

function FavouriteCard({title,id,image,price}) {
  const [{ favourites }, dispatch] = useStateValue()
  
  const removeFromFavourites = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVOURITES',
      id: id,
    })
  }

  return (
     <div className='row mb-4' key={id}>
         <div className='col'>
                <img
              alt=""
              src={image}
              width="200"
              height="150"
              className="d-inline-block align-top "
              style={{objectFit:'contain'}}
            />
                </div>
                <div className='col d-flex align-items-start justify-content-center flex-column'>
                  <h5 className='text-white'>{title}</h5>
                  <p  className='text-white'>{price}</p>
                </div>
                <div className='col-md-5 d-flex align-items-start justify-content-center flex-column'>
                <div className='d-flex justify-content-evenly'>
                  <button  className='btn-card '>Cumpara</button>
                  <button  className='btn-cardfav' onClick={removeFromFavourites}>Remove Article</button></div>
                </div>
    </div>
  )
}

export default FavouriteCard