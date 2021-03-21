import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthState';

export default function SignUp(props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const newUser = {
      email,
      firstName,
      lastName,
      street,
      city,
      state,
      zipCode,
      password,
      confirmPassword
    }

    signUp(newUser, () => { props.history.push('/') })

  }
  return (
    <div className='sign-up-wrapper'>
      <form className='sign-up-form' onSubmit={onSubmit}>

        <input className='sign-up-first-name auth-input' type='name' value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder='First Name' />

        <input className='sign-up-last-name auth-input' type='name' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder='Last Name' />

        <input className='sign-up-email auth-input' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' />

        <input className='sign-up-street auth-input' type='street' value={street} onChange={(event) => setStreet(event.target.value)} placeholder='Street' />

        <input className='sign-up-city auth-input' type='city' value={city} onChange={(event) => setCity(event.target.value)} placeholder='City' />

        <input className='sign-up-state auth-input' type='state' value={state} onChange={(event) => setState(event.target.value)} placeholder='State' />

        <input className='sign-up-zipCode auth-input' type='zipCode' value={zipCode} onChange={(event) => setZipCode(event.target.value)} placeholder='Zip Code' />

        <input className='sign-up-password auth-input' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />

        <input className='sign-up-confirm-password auth-input' type='password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password' />

        <button className='sign-up-button button'>Sign Up</button>

      </form>
    </div>
  )
}
