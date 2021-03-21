export default (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: true
      }
    case 'GET_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload
      }
    case 'ADD_NEW_PRODUCT':
      return {
        ...state,
        products: [action.payload, ...state.products]
      }
    case 'DISPLAY_DESCRIPTION':
      return {
        ...state,
        descriptionHover: true
      }
    case 'GET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}