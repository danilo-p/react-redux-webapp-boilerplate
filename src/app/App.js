import React from "react";
import styles from "./App.styl";

class App extends React.Component {
  render() {
    return (
      <h1 className={styles.title}>Hello World!</h1>
    );
  }
}

export {
  App as default
};
