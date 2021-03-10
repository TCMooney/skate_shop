import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import AuthReducer from '../reducers';

const initialState = {
  user: '',
  isAuthenticated: false,
  error: ''
}
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  async function loadUser(success) {
    try {
      const res = await axios.get('http:localhost:4000/auth/loadUser', { withCredentials: true })

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success()
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(error)
      })

    }
  }

  async function signUp(fields, success) {
    try {
      const res = await axios.post('http://localhost:4000/user', fields, { withCredentials: true });

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success()
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(error)
      })
    }
  }

  async function signIn(fields, success) {
    try {
      const res = await axios.post('http://localhost:4000/auth', fields, { withCredentials: true })

      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: res.data
      })

      success()
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(error)
      })
    }
  }

  async function signOut(success) {
    try {
      const res = await axios.get('http://localhost:4000/auth/logout', { withCredentials: true })

      dispatch({
        type: 'SIGNOUT_SUCCESS',
        payload: res.data
      })

      success()
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: console.log(error)
      })
    }
  }

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      loadUser,
      signUp,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}