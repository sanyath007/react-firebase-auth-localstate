import React from 'react';
import { withFirebase } from '../Firebase';

const SignOut = ({ firebase }) => (
  <a className="nav-link" onClick={firebase.doSignOut}>
    Sign Out
  </a>
);

export default withFirebase(SignOut);