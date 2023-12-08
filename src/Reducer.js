export const initialState = {
  user: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
      break
    case 'REMOVE_USER':
      break
      deafult: return state
  }
}

export default reducer
