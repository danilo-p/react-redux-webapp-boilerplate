import React from "react";
import styles from "./App.styl";
import config from "common/config";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className={styles.title}>React Webapp Boilerplate</h1>
        {require("common/lorem.txt")}
        <img src={require("common/random.jpg")} alt="Just a random image"/>
        <code>
          <pre>
            {
              JSON.stringify(config, null, 2)
            }
          </pre>
        </code>
      </div>
    );
  }
}

export {
  App as default
};
