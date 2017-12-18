import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import userShape from 'common/shapes/user';
// import UserPreview from '../../app/userPreview/userPreview';

const UserCard = props => (
  <div className="user-card mt-3">
    <Card>
      <CardImg
        className="card-img-top mw-100"
        src={props.user.avatar_url}
        alt={`${props.user.login}'s GitHub Avatar`}
      />
      <CardBody>
        <Link href={`/${props.user.login}`} to={`/${props.user.login}`}>
          {props.user.name || props.user.login}
        </Link>
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

export {
  UserCard as default,
};
