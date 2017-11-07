import React from 'react';
import githubLogo from 'common/assets/github.png';
import styles from './Header.styl';

const Header = () => (
  <div className={styles.header}>
    <img src={githubLogo} className={styles.header__logo} alt="logo" />
  </div>
);

export {
  Header as default,
};
