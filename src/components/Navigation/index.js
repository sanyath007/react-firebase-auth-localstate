import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOut from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = ({ authUser }) => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="#">React With Firebase</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.HOME} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ACCOUNT} className="nav-link">Account</Link>
        </li>
        <li className="nav-item">
          <Link to={ROUTES.ADMIN} className="nav-link">Admin</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <AuthUserContext.Consumer>
          {authUser =>
            authUser 
              ? (
                <li className="nav-item">          
                  <SignOut />
                </li>
              )  
              : (
                <li className="nav-item active">
                  <Link to={ROUTES.SIGN_IN} className="nav-link">Sign In</Link>
                </li> 
              )
          }
        </AuthUserContext.Consumer>
      </ul>
    </div>
  </nav>
);

export default Navigation;
