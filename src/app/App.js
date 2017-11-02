import React from "react";
import styles from "./App.styl";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.title}>React Webapp Boilerplate</h1>
        {require("common/lorem.txt")}
      </div>
    );
  }
}

export {
  App as default
};
