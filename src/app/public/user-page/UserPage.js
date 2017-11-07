
import { ListGroup, ListGroupItem } from 'reactstrap';
import api from 'common/utils/api';
import React from 'react';
import PropTypes from 'prop-types';


class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.getUser();
  }

  getUser() {
    api.getUser(this.props.match.params.string)
      .then((response) => {
        this.setState({
          user: response.data,
        });
      });
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem>{this.state.user.name || this.state.user.login}</ListGroupItem>
      </ListGroup>
    );
  }
}

UserPage.propTypes = {
  match: PropTypes.node.isRequired,
};

export {
  UserPage as default,
};
