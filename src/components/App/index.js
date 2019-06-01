import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount () {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    })
  }

  componentWillUnmount () {
    this.listener();
  }

  render () {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <Navigation />

          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </Router>
      </AuthUserContext.Provider>
    );
  }
};

export default withFirebase(App);