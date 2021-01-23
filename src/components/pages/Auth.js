import React from 'react';

import SignIn from '../auth/signIn';
import SignUp from '../auth/signUp';

export default function Auth() {
  return (
    <div className='auth-wrapper'>
      <SignIn />
      <SignUp />
    </div>
  )
}
