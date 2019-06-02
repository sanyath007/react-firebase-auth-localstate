import React, { Component } from 'react';

// import { withAuthorization } from '../Session';
// import * as ROLES from '../../constants/roles';
import { withFirebase } from '../Firebase';

class Admin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    }
  }

  componentDidMount () {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const userObject = snapshot.val();

      const userList = Object.keys(userObject).map(key => ({
        ...userObject[key],
      }));

      this.setState({
        users: userList,
        loading: false,
      });

      console.log(this.state.users);
    });
  }

  componentWillUnmount () {
    this.props.firebase.users().off();
  }

  render () {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>
        {/* <p>
          Restricted area! Only users with the admin role are authorized.
        </p> */}
        {loading && <div>Loading ...</div>}

        <UserList users={users} />       
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID: </strong>{user.uid}
        </span>
        <span>
          <strong>Email: </strong>{user.email}
        </span>
        <span>
          <strong>Username: </strong>{user.username}
        </span>
      </li>
    ))}
  </ul>
);

// const condition = authUser =>
//   authUser && !!authUser.roles[ROLES.ADMIN];
  
// export default withAuthorization(condition)(Admin);
export default withFirebase(Admin);