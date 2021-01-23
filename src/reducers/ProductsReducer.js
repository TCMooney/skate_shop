export default (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: true
      }
    case 'GET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}