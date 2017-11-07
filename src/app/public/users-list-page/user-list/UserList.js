import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import userShape from 'common/shapes/user';
import UserCard from '../user-card/UserCard';

class UsersList extends React.Component {
  renderUsersList() {
    return this.props.list.map(user => (
      <Col md="3" key={user.login}>
        <UserCard user={user} />
      </Col>
    ));
  }

  render() {
    return (
      <div className="users-list">
        <Row>
          {
            this.props.listLoading
              ? (<div className="text-center">Loading...</div>)
              : this.renderUsersList()
          }
        </Row>
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
