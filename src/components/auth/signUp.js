import React, { useContext, useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  //TODO Import signIn function from context

  const onSubmit = event => {
    event.preventDefault();

    const credentials = {
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    }

    //TODO Include signIn function here
  }
  return (
    <div className='sign-up-wrapper'>
      <form className='sign-up-form' onSubmit={onSubmit}>

        <input className='sign-up-first-name auth-input' type='name' value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder='First Name' />

        <input className='sign-up-last-name auth-input' type='name' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder='Last Name' />

        <input className='sign-up-email auth-input' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' />

        <input className='sign-up-password auth-input' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />

        <input className='sign-up-confirm-password auth-input' type='password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password' />

        <button className='sign-up-button button'>Sign Up</button>

      </form>
    </div>
  )
}
