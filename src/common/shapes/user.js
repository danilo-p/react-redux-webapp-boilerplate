import PropTypes from 'prop-types';

export default PropTypes.shape({
  login: PropTypes.string,
  name: PropTypes.string,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string,
  public_repos: PropTypes.number,
});
