export const initialState = {
  user: null,
  favourites: JSON.parse(localStorage.getItem('favourites')) || [],
  basket: JSON.parse(localStorage.getItem('basket')) || [],
}
export const getBasketTotal = (basket) =>
  basket?.reduce(
    (amount, item) => Number(item.price) * Number(item.cantitate) + amount,
    0
  )

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'ADD_TO_FAVOURITES':
      const updatedFavourites = [...state.favourites, action.item]
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites))
      return {
        ...state,
        favourites: updatedFavourites,
      }
    case 'REMOVE_FROM_FAVOURITES':
      const newFavourites = state.favourites.filter(
        (favouritesItem) => favouritesItem.id !== action.id
      )
      localStorage.setItem('favourites', JSON.stringify(newFavourites))
      return { ...state, favourites: newFavourites }
    case 'ADD_TO_BASKET':
      const updatedBasket = [...state.basket, action.item]
      localStorage.setItem('basket', JSON.stringify(updatedBasket))
      return {
        ...state,
        basket: updatedBasket,
      }
    case 'REMOVE_FROM_BASKET':
      const newBasket = state.basket.filter(
        (basketItem) => basketItem.id !== action.id
      )
      localStorage.setItem('basket', JSON.stringify(newBasket))
      return { ...state, basket: newBasket }
    case 'UPDATE_QUANTITY':
      const updatedBasketQuantity = state.basket.map((item) =>
        item.id === action.id
          ? { ...item, cantitate: action.newQuantity }
          : item
      )
      localStorage.setItem('basket', JSON.stringify(updatedBasketQuantity))
      return {
        ...state,
        basket: updatedBasketQuantity,
      }

    default:
      return state
  }
}

export default reducer
