import React from 'react';

import SignIn from '../auth/signIn';
import SignUp from '../auth/signUp';

export default function Auth(props) {
  return (
    <div className='auth-wrapper'>
      <SignIn success={() => props.history.push('/')} />
      <SignUp success={() => props.history.push('/')} />
    </div>
  )
}
