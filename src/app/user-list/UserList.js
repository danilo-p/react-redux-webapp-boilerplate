import React from 'react';
import UserCard from 'common/components/UserCard';
import PropTypes from 'prop-types';
import userShape from 'common/shapes/user';

class UsersList extends React.Component {
  renderUsersList() {
    return this.props.list.map(user => (
      <div className="col-md-3" key={user.login}>
        <UserCard user={user} />
      </div>
    ));
  }

  render() {
    return (
      <div className="users-list">
        <div className="row">
          {
            this.props.listLoading
              ? (<div className="text-center">Loading...</div>)
              : this.renderUsersList()
          }
        </div>
      </div>
    );
  }
}

UsersList.propTypes = {
  list: PropTypes.arrayOf(userShape),
  listLoading: PropTypes.bool,
};

UsersList.defaultProps = {
  list: [],
  listLoading: false,
};

export default UsersList;
