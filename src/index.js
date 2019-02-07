import React from "react";
import ReactDOM from "react-dom";

import Hooks from './hooks'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React Hooks!</h1>
      <h2>Let's play around...</h2>
      <Hooks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
