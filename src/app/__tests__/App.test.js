import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";

it("should mount the App without any problem", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
