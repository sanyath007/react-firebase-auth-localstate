import React from 'react';

import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const Account = () => (
  <div className="container">
    <h1>Account</h1>
    <PasswordChangeForm />
    <PasswordForgetLink />
  </div>
);

export default Account;