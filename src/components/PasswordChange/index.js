import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor (props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            name="passwordOne"
            value={this.passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <input
            name="passwordTwo"
            value={this.passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit" disabled={isInvalid}>
          Change password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);