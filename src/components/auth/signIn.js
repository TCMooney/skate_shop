import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthState';

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();

    const credentials = {
      email,
      password
    }

    signIn(credentials, props.success);

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
