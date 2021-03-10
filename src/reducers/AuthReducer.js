export default (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      const { user } = action.payload
      return {
        ...state,
        user,
        isAuthenticated: true
      }
    case 'AUTH_ERROR':
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        user: '',
        isAuthenticated: false,
        error: action.payload
      }
    default: return state
  }
}