import React from 'react';
import { Row, Col } from 'reactstrap';
import UserCard from 'common/components/UserCard';
import PropTypes from 'prop-types';
import userShape from 'common/shapes/user';

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
