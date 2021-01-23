import React, { useContext, useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //TODO Import signIn function from context

  const onSubmit = event => {
    event.preventDefault();

    const credentials = {
      email,
      password
    }

    //TODO Include signIn function here
  }
  return (
    <div className='sign-in-wrapper'>
      <form className='sign-in-form' onSubmit={onSubmit}>

        <input className='sign-in-email auth-input' type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' />

        <input className='sign-in-password auth-input' type='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />

        <button className='sign-in-button button'>Sign In</button>

      </form>
    </div>
  )
}
