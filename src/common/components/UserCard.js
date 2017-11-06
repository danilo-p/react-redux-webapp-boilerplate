import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardText,
} from 'reactstrap';
import userShape from 'common/shapes/user';

const UserCard = props => (
  <div className="user-card mt-3">
    <Card>
      <CardImg
        className="card-img-top mw-100"
        src={props.user.avatar_url}
        alt={`${props.user.login}'s GitHub Avatar`}
      />
      <CardBody>
        <CardText>
          <a href={props.user.html_url} title={`${props.user.login}'s GitHub Page`}>
            <b>{props.user.name || props.user.login}</b>
          </a>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

UserCard.propTypes = {
  user: userShape,
};

UserCard.defaultProps = {
  user: {},
};

export default UserCard;
