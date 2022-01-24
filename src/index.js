import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
reportWebVitals();
