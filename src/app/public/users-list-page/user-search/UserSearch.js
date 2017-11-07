import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  InputGroupButton,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';

const UserSearch = props => (
  <div className="mt-3">
    <Row>
      <Col md="4">
        <InputGroup>
          <Input
            type="text"
            value={props.value}
            onChange={props.onChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') { props.onAddClick(); }
            }}
          />
          <InputGroupButton>
            <Button
              color="primary"
              onClick={props.onAddClick}
              style={{ cursor: 'pointer' }}
              disabled={props.loading}
            >
              {
                props.loading
                  ? 'Loading...'
                  : 'Add'
              }
            </Button>
          </InputGroupButton>
        </InputGroup>
        <div
          className="text-danger"
          style={{ fontSize: '0.8em' }}
        >
          {props.error}
        </div>
      </Col>
    </Row>
  </div>
);

UserSearch.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onAddClick: PropTypes.func,
};

UserSearch.defaultProps = {
  value: '',
  error: '',
  loading: false,
  onChange: () => {},
  onAddClick: () => {},
};

export {
  UserSearch as default,
};

