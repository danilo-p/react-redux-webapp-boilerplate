import React from 'react';
import config from 'common/config/index';
import loremIpsum from 'common/lorem.txt';
import randomImage from 'common/random.jpg';
import styles from './App.styl';

const App = () => (
  <div className="App">
    <h1 className={styles.title}>React Redux Webapp Boilerplate</h1>
    {loremIpsum}
    <img src={randomImage} alt="This is random" />
    <code>
      <pre>
        {
          JSON.stringify(config, null, 2)
        }
      </pre>
    </code>
  </div>
);

export {
  App as default,
};
