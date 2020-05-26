import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import App from "./App";
// import LifeCycleExamples from "./LifeCycleExamples";
import UdemyDemo from "./UdemyDemo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LifeCycleExamples /> */}
    <UdemyDemo />
  </React.StrictMode>,
  rootElement
);
