import React from 'react';
import userShape from 'common/shapes/user';

const UserCard = props => (
  <div className="user-card mt-3">
    <div className="card">
      <img
        className="card-img-top mw-100"
        src={props.user.avatar_url}
        alt={`${props.user.login}'s GitHub Avatar`}
      />
      <div className="card-block">
        <div className="card-title">
          <a href={props.user.html_url} title={`${props.user.login}'s GitHub Page`}>
            <b>{props.user.name || props.user.login}</b>
          </a>
        </div>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  user: userShape,
};

UserCard.defaultProps = {
  user: {},
};

export default UserCard;
