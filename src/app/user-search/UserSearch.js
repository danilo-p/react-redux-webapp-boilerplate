import React from 'react';
import PropTypes from 'prop-types';

const UserSearch = props => (
  <div className="mt-3">
    <div className="row">
      <div className="col-md-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={props.value}
            onChange={props.onChange}
          />
          <span className="input-group-btn">
            <button
              onClick={props.onAddClick}
              className="btn btn-primary"
              style={{ cursor: 'pointer' }}
              disabled={props.loading}
            >
              {
                props.loading
                  ? 'Loading...'
                  : 'Add'
              }
            </button>
          </span>
        </div>
        <div
          className="text-danger"
          style={{ fontSize: '0.8em' }}
        >
          {props.error}
        </div>
      </div>
    </div>
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
