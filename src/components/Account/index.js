import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="container">
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
        <PasswordForgetLink />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);